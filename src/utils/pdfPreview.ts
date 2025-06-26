import * as pdfjsLib from 'pdfjs-dist'

// Configurar worker do PDF.js
if (typeof window !== 'undefined') {
  // Usar worker da versão específica do unpkg
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@5.3.31/build/pdf.worker.min.js`
}

export async function generatePdfPreview(pdfFile: File): Promise<File | null> {
  try {
    // Converter arquivo para array buffer
    const arrayBuffer = await pdfFile.arrayBuffer()
    
    // Carregar PDF
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise
    
    // Obter primeira página
    const page = await pdf.getPage(1)
    
    // Configurar viewport para boa resolução
    const viewport = page.getViewport({ scale: 2.0 })
    
    // Criar canvas
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    
    if (!context) {
      throw new Error('Não foi possível criar contexto do canvas')
    }
    
    canvas.height = viewport.height
    canvas.width = viewport.width
    
    // Renderizar página no canvas
    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise
    
    // Converter canvas para blob
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          // Criar arquivo com nome modificado
          const previewName = pdfFile.name.replace('.pdf', '_preview.png')
          const previewFile = new File([blob], previewName, { type: 'image/png' })
          resolve(previewFile)
        } else {
          resolve(null)
        }
      }, 'image/png', 0.9)
    })
    
  } catch (error) {
    console.error('Erro ao gerar prévia do PDF:', error)
    return null
  }
}
