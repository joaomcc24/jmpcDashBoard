let accessToken: string | null = null;

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';

export const signInWithGoogle = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    
    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
    const REDIRECT_URI = `${window.location.origin}/google-oauth-callback.html`;
    const SCOPE = 'https://www.googleapis.com/auth/calendar.events';
    
    const authUrl = new URL(GOOGLE_AUTH_URL);
    authUrl.searchParams.set('client_id', CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.set('response_type', 'token');
    authUrl.searchParams.set('scope', SCOPE);
    authUrl.searchParams.set('access_type', 'online');
    authUrl.searchParams.set('prompt', 'select_account');

    const popup = window.open(
      authUrl.toString(),
      'google-auth',
      'width=500,height=600,scrollbars=yes,resizable=yes'
    );

    if (!popup) {
      console.error('Popup bloqueado pelo browser');
      reject(new Error('popup_blocked_by_browser'));
      return;
    }

    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed);
        reject(new Error('Popup foi fechado pelo utilizador'));
      }
    }, 1000);

    const messageListener = (event: MessageEvent) => {
      
      if (event.origin !== window.location.origin) {
        return;
      }
      
      if (event.data.type === 'GOOGLE_AUTH_SUCCESS') {
        clearInterval(checkClosed);
        window.removeEventListener('message', messageListener);
        popup.close();
        accessToken = event.data.access_token;
        resolve(event.data.access_token);
      } else if (event.data.type === 'GOOGLE_AUTH_ERROR') {
        clearInterval(checkClosed);
        window.removeEventListener('message', messageListener);
        popup.close();
        
        reject(new Error(event.data.error || 'Authentication failed'));
      }
    };

    window.addEventListener('message', messageListener);
  });
};

export const createCalendarEvent = async (eventData: Record<string, unknown>) => {
  try {
    if (!accessToken) {
      await signInWithGoogle();
    }

    const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to create calendar event: ${response.status} - ${errorData.error?.message || response.statusText}`);
    }

    const result = await response.json();
    return { status: response.status, result };
  } catch (error) {
    console.error('Error creating calendar event:', error);
    accessToken = null;
    throw error;
  }
};
