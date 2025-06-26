"use client"

interface ServiceData {
  id: string
  cliente: {
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
  }
  equipamento: {
    tipo: string
    marca: string
    modelo: string
    numeroSerie: string | null
    dataCompra: string | null
  }
  tipo: string
  descricaoProblema: string
  estado: string
  dataEntrada: string
  dataDiagnostico: string | null
  dataReparacao: string | null
  tecnico: string | null
  garantia: boolean
  periodoGarantia: string | null
  notas: string | null
  pecas: Array<{
    codigo: string
    nome: string
    quantidade: number
    precoUnitario: string
    total: string
  }>
  maoDeObra: {
    horas: string
    valorHora: string
    total: string
  } | null
  deslocacao: {
    km: string
    valorKm: string
    total: string
  } | null
  valorTotal: string | null
}

interface PrintReportProps {
  serviceData: ServiceData
}

// Helper function to generate report content
function generateReportContent(
  serviceData: ServiceData, 
  partsTotal: number, 
  laborTotal: number, 
  travelTotal: number, 
  grandTotal: number
): string {
  return `
    <div class="main-content">
        <div class="header">
            <div class="company-name">JMPC - Reparações Técnicas</div>
            <div class="report-title">Relatório de Serviço</div>
            <div class="service-id">Serviço Nº ${serviceData.id}</div>
        </div>

        <div class="client-equipment-section">
            <div class="info-section">
                <div class="info-section-header">Informações do Cliente</div>
                <div class="info-section-content">
                    <div class="field">
                        <div class="field-label">Nome</div>
                        <div class="field-value">${serviceData.cliente.nome}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Telefone</div>
                        <div class="field-value">${serviceData.cliente.telefone}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Email</div>
                        <div class="field-value">${serviceData.cliente.email}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Morada</div>
                        <div class="field-value">${serviceData.cliente.morada}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Tipo</div>
                        <div class="field-value">${serviceData.cliente.tipo.charAt(0).toUpperCase() + serviceData.cliente.tipo.slice(1)}</div>
                    </div>
                </div>
            </div>

            <div class="info-section">
                <div class="info-section-header">Informações do Equipamento</div>
                <div class="info-section-content">
                    <div class="field">
                        <div class="field-label">Tipo</div>
                        <div class="field-value">${serviceData.equipamento.tipo}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Marca</div>
                        <div class="field-value">${serviceData.equipamento.marca}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Modelo</div>
                        <div class="field-value">${serviceData.equipamento.modelo}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Número de Série</div>
                        <div class="field-value">${serviceData.equipamento.numeroSerie || 'N/A'}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Data de Compra</div>
                        <div class="field-value">${serviceData.equipamento.dataCompra ? new Date(serviceData.equipamento.dataCompra).toLocaleDateString('pt-PT') : 'N/A'}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Garantia</div>
                        <div class="field-value">${serviceData.garantia ? 'Sim' : 'Não'}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Detalhes do Serviço</div>
            <div class="section-content">
                <div class="two-column">
                    <div>
                        <div class="field">
                            <div class="field-label">Técnico</div>
                            <div class="field-value">${serviceData.tecnico || 'Não atribuído'}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Data de Entrada</div>
                            <div class="field-value">${new Date(serviceData.dataEntrada).toLocaleDateString('pt-PT')}</div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="field-label">Garantia</div>
                            <div class="field-value">${serviceData.garantia ? 'Sim' : 'Não'}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Tipo de Serviço</div>
                            <div class="field-value">${serviceData.tipo}</div>
                        </div>
                    </div>
                </div>
                <div class="field" style="margin-top: 6px;">
                    <div class="field-label">Problema Reportado</div>
                    <div class="field-value" style="background: white; padding: 5px; line-height: 1.4; min-height: ${serviceData.descricaoProblema.length > 100 ? '40px' : '26px'}; font-size: 10px;">${serviceData.descricaoProblema}</div>
                </div>
                ${serviceData.notas ? `
                <div class="field" style="margin-top: 6px;">
                    <div class="field-label">Notas Técnicas</div>
                    <div class="notes">${serviceData.notas}</div>
                </div>
                ` : ''}
            </div>
        </div>

        <!-- Peças Utilizadas - Altura dinâmica baseada no número de peças -->
        <div class="section">
            <div class="section-title">Peças Utilizadas</div>
            <div class="section-content">
                <table class="parts-table">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Qtd</th>
                            <th>Preço Unit.</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Array.from({length: Math.max(4, serviceData.pecas.length + 2)}, (_, index) => {
                            const part = serviceData.pecas[index];
                            return `
                            <tr>
                                <td style="text-align: left; padding-left: 6px;">${part ? part.nome : ''}</td>
                                <td class="number">${part ? part.quantidade : ''}</td>
                                <td class="number">${part ? parseFloat(part.precoUnitario).toFixed(2) + ' €' : ''}</td>
                                <td class="number">${part ? parseFloat(part.total).toFixed(2) + ' €' : ''}</td>
                            </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Descrição da Reparação</div>
            <div class="section-content">
                <div class="repair-description">
                    <div style="background: white; min-height: 70px; padding: 8px; border: none;"></div>
                </div>
            </div>
        </div>

        <div class="totals-section">
            <div class="total-line">
                <span>Subtotal Peças:</span>
                <span>${partsTotal.toFixed(2)} €</span>
            </div>
            ${serviceData.maoDeObra ? `
            <div class="total-line">
                <span>Mão de Obra (${serviceData.maoDeObra.horas}h × ${parseFloat(serviceData.maoDeObra.valorHora).toFixed(2)} €):</span>
                <span>${parseFloat(serviceData.maoDeObra.total).toFixed(2)} €</span>
            </div>
            ` : ''}
            ${serviceData.deslocacao ? `
            <div class="total-line">
                <span>Deslocação (${serviceData.deslocacao.km} km × ${parseFloat(serviceData.deslocacao.valorKm).toFixed(2)} €):</span>
                <span>${parseFloat(serviceData.deslocacao.total).toFixed(2)} €</span>
            </div>
            ` : ''}
            <div class="total-line">
                <span>TOTAL GERAL:</span>
                <span>${grandTotal.toFixed(2)} €</span>
            </div>
        </div>

        <div class="signatures-section">
            <div class="section-title">Assinaturas</div>
            <div class="signatures-grid">
                <div class="signature-field">
                    <div class="signature-label">Técnico Responsável</div>
                    <div class="signature-line" style="padding: 6px"></div>
                    <div class="signature-sublabel">
                        Nome e Assinatura
                    </div>
                </div>
                <div class="signature-field">
                    <div class="signature-label">Cliente</div>
                    <div class="signature-line" style="padding: 6px"></div>
                    <div class="signature-sublabel">
                        Nome e Assinatura
                    </div>
                </div>
            </div>
            <div style="margin-top: 5px; text-align: center; color: #6b7280; font-size: 9px;">
                <p>Ao assinar este documento, o cliente confirma que ficou a funcionar em perfeitas condições.</p>
            </div>
        </div>
    </div>

    <div class="footer">
        <p><strong>JMPC - Reparações Técnicas</strong> | Contactos: 938263950 ou 961746885</p>
        <p>Rua José Pereira Monteiro, nº245, 4660-246 Resende</p>
        <div style="margin-top: 4px; display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap;">
            <img src="/images/beko.svg" alt="Beko" style="width: 45px; height: auto;">
            <img src="/images/whirlpool.svg" alt="Whirlpool" style="width: 55px; height: auto;">
            <img src="/images/indesit.svg" alt="Indesit" style="width: 55px; height: auto;">
            <img src="/images/hotpoint.png" alt="Hotpoint" style="width: 55px; height: auto;">
        </div>
    </div>
  `
}

export function PrintReport({ serviceData }: PrintReportProps) {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank', 'width=800,height=600')
    if (!printWindow) return

    // Calculate totals
    const partsTotal = serviceData.pecas.reduce((sum, part) => sum + parseFloat(part.total), 0)
    const laborTotal = serviceData.maoDeObra ? parseFloat(serviceData.maoDeObra.total) : 0
    const travelTotal = serviceData.deslocacao ? parseFloat(serviceData.deslocacao.total) : 0
    const grandTotal = partsTotal + laborTotal + travelTotal

    // Generate the report content once
    const reportContent = generateReportContent(serviceData, partsTotal, laborTotal, travelTotal, grandTotal)

    // Generate HTML for printing with ORIGINAL and DUPLICADO
    const printHTML = `
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serviço ${serviceData.id} - ${serviceData.cliente.nome}</title>
    <style>
        @media print {
            @page {
                margin: 6mm;
                size: A4;
            }
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .page-break {
                page-break-before: always;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 10px;
            line-height: 1.3;
            color: #333;
            background: white;
        }
        
        .document-copy {
            position: relative;
            margin-bottom: 0;
            min-height: 100vh;
            max-height: 100vh;
            display: flex;
            flex-direction: column;
            padding: 0;
        }
        
        .main-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 4px;
        }

        .content-sections {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .copy-label {
            position: absolute;
            top: 5px;
            right: 15px;
            background: #f3f4f6;
            border: 2px solid #9ca3af;
            padding: 6px 12px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 10px;
            color: #374151;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 10;
        }
        
        .copy-original {
            background: #ecfdf5;
            border-color: #10b981;
            color: #065f46;
        }
        
        .copy-duplicate {
            background: #fef3c7;
            border-color: #f59e0b;
            color: #92400e;
        }
        
        .header {
            text-align: center;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 5px;
            margin-bottom: 6px;
            flex-shrink: 0;
        }

        .company-name {
            font-size: 17px;
            font-weight: bold;
            color: #cc1231;
            margin-bottom: 2px;
        }
        
        .report-title {
            font-size: 11px;
            color: #4b5563;
            margin-bottom: 3px;
        }
        
        .service-id {
            font-size: 10px;
            color: #6b7280;
            background: #f3f4f6;
            padding: 3px 10px;
            border-radius: 10px;
            display: inline-block;
        }

        .section {
            margin-bottom: 5px;
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            overflow: hidden;
            flex-shrink: 0;
        }

        .section-title {
            background: #f8fafc;
            border-bottom: 1px solid #e5e7eb;
            padding: 5px 8px;
            font-weight: bold;
            font-size: 10px;
            color: #374151;
        }
          
        .section-content {
            padding: 7px;
            background: white;
        }

        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }
          
        .client-equipment-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 8px;
        }
        
        .info-section {
            border: 1px solid #e5e7eb;
            border-radius: 3px;
            overflow: hidden;
            min-height: 110px;
        }
        
        .info-section-header {
            background: #f8fafc;
            border-bottom: 1px solid #e5e7eb;
            padding: 6px 8px;
            font-weight: bold;
            font-size: 10px;
            color: #374151;
        }
        
        .info-section-content {
            padding: 8px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            height: calc(100% - 32px);
        }
        
        .field {
            margin-bottom: 5px;
        }
        
        .field-label {
            font-weight: 600;
            color: #4b5563;
            margin-bottom: 2px;
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.4px;
        }
        
        .field-value {
            color: #1f2937;
            font-size: 10px;
            line-height: 1.4;
        }

        .status-badge {
            display: inline-block;
            padding: 2px 6px;
            border-radius: 8px;
            font-size: 8px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        
        .status-pending { background: #fef3c7; color: #92400e; }
        .status-completed { background: #d1fae5; color: #065f46; }
        .status-waiting { background: #fed7aa; color: #9a3412; }
        .status-response { background: #dbeafe; color: #1e40af; }
          
        .parts-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 6px;
        }

        .parts-table th,
        .parts-table td {
            border: 1px solid #e5e7eb;
            padding: 5px 6px;
            text-align: center;
            height: 26px;
        }

        .parts-table th {
            background: white;
            font-weight: 600;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #4b5563;
            text-align: center;
        }

        .totals-section {
            background: #f8fafc;
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            padding: 8px;
            margin-top: 6px;
            page-break-inside: avoid;
            flex-shrink: 0;
        }
          
        .total-line {
            display: flex;
            justify-content: space-between;
            padding: 3px 0;
            border-bottom: 1px solid #e5e7eb;
            font-size: 11px;
        }
        
        .total-line:last-child {
            border-bottom: none;
            font-weight: bold;
            font-size: 12px;
            color: #1f2937;
            padding-top: 5px;
            border-top: 2px solid #2563eb;
        }

        .footer {
            margin-top: auto;
            border-top: 1px solid #e5e7eb;
            padding-top: 6px;
            text-align: center;
            color: #6b7280;
            font-size: 11px;
            page-break-inside: avoid;
        }
        
        .footer img {
            width: 45px;
            height: auto;
            margin: 4px 6px;
            vertical-align: middle;
        }
        
        .notes {
            background: #fffbeb;
            border: 1px solid #fcd34d;
            border-radius: 3px;
            padding: 4px;
            white-space: pre-wrap;
            font-style: italic;
            font-size: 10px;
        }

        .repair-description {
            background: white;
            border: none;
            border-radius: 0;
            padding: 6px;
            margin-top: 0;
            font-size: 10px;
            min-height: 70px;
            flex-grow: 1;
        }

        .repair-description-content {
            border: none;
            outline: none;
            width: 100%;
            min-height: 60px;
            font-family: inherit;
            font-size: 9px;
            line-height: 1.4;
            background: white;
            resize: none;
        }

        .signatures-section {
            margin-top: 2px;
            page-break-inside: avoid;
            flex-shrink: 0;
        }
        
        .signatures-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 4px;
        }
        
        .signature-field {
            border: 1px solid #e5e7eb;
            border-radius: 4px;  
            padding: 8px 12px;
            text-align: center;
            min-height: 55px;
        }
        
        .signature-label {
            font-weight: bold;
            color: #374151;
            margin-bottom: 1px;
            font-size: 11px;
        }
          
        .signature-line {
            border-bottom: 2px solid #374151;
            width: 90%;
            margin: 12px auto 6px;
            height: 1px;
        }
        
        .signature-sublabel {
            font-size: 10px;
            color: #6b7280;
            margin-top: 1px;
        }
    </style>
</head>
<body>
    <!-- ORIGINAL -->
    <div class="document-copy">
        <div class="copy-label copy-original">ORIGINAL</div>
        ${reportContent}
    </div>
    
    <!-- DUPLICADO -->
    <div class="document-copy page-break">
        <div class="copy-label copy-duplicate">DUPLICADO</div>
        ${reportContent}
    </div>

    <script>
        window.onload = function() {
            window.print();
            window.onafterprint = function() {
                window.close();
            };
        };
    </script>
</body>
</html>
    `

    // Write HTML to the window and close it
    printWindow.document.write(printHTML)
    printWindow.document.close()
    
    // Auto print and close after printing
    printWindow.onload = () => {
      printWindow.focus()
      printWindow.print()
      setTimeout(() => {
        printWindow.close()
      }, 1000)
    }
  }

  return { handlePrint }
}

// Helper functions for the template
function getStatusClass(status: string): string {
  switch(status) {
    case 'pendente': return 'status-pending'
    case 'concluido': return 'status-completed'
    case 'aguarda_peca': return 'status-waiting'
    case 'resposta_marca': return 'status-response'
    default: return 'status-pending'
  }
}

function getStatusLabel(status: string): string {
  switch(status) {
    case 'pendente': return 'Pendente'
    case 'concluido': return 'Concluído'
    case 'aguarda_peca': return 'Aguarda Peça'
    case 'resposta_marca': return 'Resposta da Marca'
    default: return status
  }
}
