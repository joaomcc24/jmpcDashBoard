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

export function PrintReport({ serviceData }: PrintReportProps) {
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    // Calculate totals
    const partsTotal = serviceData.pecas.reduce((sum, part) => sum + parseFloat(part.total), 0)
    const laborTotal = serviceData.maoDeObra ? parseFloat(serviceData.maoDeObra.total) : 0
    const travelTotal = serviceData.deslocacao ? parseFloat(serviceData.deslocacao.total) : 0
    const grandTotal = partsTotal + laborTotal + travelTotal

    // Generate HTML for printing
    const printHTML = `
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Serviço - ${serviceData.id}</title>
    <style>
        @media print {
            @page {
                margin: 15mm;
                size: A4;
            }
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            color: #333;
            background: white;
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 5px;
        }
        
        .report-title {
            font-size: 18px;
            color: #4b5563;
            margin-bottom: 10px;
        }
        
        .service-id {
            font-size: 14px;
            color: #6b7280;
            background: #f3f4f6;
            padding: 8px 16px;
            border-radius: 20px;
            display: inline-block;
        }
        
        .section {
            margin-bottom: 25px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .section-title {
            background: #f8fafc;
            border-bottom: 1px solid #e5e7eb;
            padding: 12px 16px;
            font-weight: bold;
            font-size: 14px;
            color: #374151;
        }
        
        .section-content {
            padding: 16px;
        }
        
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .field {
            margin-bottom: 12px;
        }
        
        .field-label {
            font-weight: 600;
            color: #4b5563;
            margin-bottom: 2px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .field-value {
            color: #1f2937;
            font-size: 13px;
        }
        
        .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .status-pending { background: #fef3c7; color: #92400e; }
        .status-completed { background: #d1fae5; color: #065f46; }
        .status-waiting { background: #fed7aa; color: #9a3412; }
        .status-response { background: #dbeafe; color: #1e40af; }
        
        .parts-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
        }
        
        .parts-table th,
        .parts-table td {
            border: 1px solid #e5e7eb;
            padding: 8px;
            text-align: left;
        }
        
        .parts-table th {
            background: #f9fafb;
            font-weight: 600;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #4b5563;
        }
        
        .parts-table .code {
            font-family: 'Courier New', monospace;
            font-size: 11px;
            background: #f3f4f6;
        }
        
        .parts-table .number {
            text-align: right;
        }
        
        .totals-section {
            background: #f8fafc;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            padding: 16px;
            margin-top: 20px;
        }
        
        .total-line {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .total-line:last-child {
            border-bottom: none;
            font-weight: bold;
            font-size: 16px;
            color: #1f2937;
            padding-top: 12px;
            border-top: 2px solid #2563eb;
        }
        
        .footer {
            margin-top: 40px;
            border-top: 1px solid #e5e7eb;
            padding-top: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 10px;
        }
          .notes {
            background: #fffbeb;
            border: 1px solid #fcd34d;
            border-radius: 6px;
            padding: 12px;
            white-space: pre-wrap;
            font-style: italic;
        }
          .repair-description {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 16px;
            margin: 20px 0;
            min-height: 100px;
        }
        
        .repair-description-title {
            font-weight: bold;
            color: #374151;
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .repair-description-content {
            border: none;
            outline: none;
            width: 100%;
            min-height: 60px;
            font-family: inherit;
            font-size: 12px;
            line-height: 1.5;
            background: transparent;
            resize: none;
        }
        
        .signatures-section {
            margin-top: 40px;
            page-break-inside: avoid;
        }
        
        .signatures-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-top: 30px;
        }
        
        .signature-field {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            min-height: 100px;
        }
        
        .signature-label {
            font-weight: bold;
            color: #374151;
            margin-bottom: 15px;
            font-size: 14px;
        }
        
        .signature-line {
            border-bottom: 2px solid #374151;
            width: 80%;
            margin: 40px auto 10px;
        }
        
        .signature-sublabel {
            font-size: 10px;
            color: #6b7280;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="company-name">JMPC - Reparações Técnicas</div>
        <div class="report-title">Relatório de Serviço</div>
        <div class="service-id">Serviço Nº ${serviceData.id}</div>
    </div>

    <div class="two-column">
        <div class="section">
            <div class="section-title">Informações do Cliente</div>
            <div class="section-content">
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
                    <div class="field-value">${serviceData.cliente.tipo}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Informações do Equipamento</div>
            <div class="section-content">
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
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Detalhes do Serviço</div>
        <div class="section-content">            <div class="two-column">
                <div>
                    <div class="field">
                        <div class="field-label">Técnico</div>
                        <div class="field-value">${serviceData.tecnico || 'Não atribuído'}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Garantia</div>
                        <div class="field-value">${serviceData.garantia ? `Sim (${serviceData.periodoGarantia || 'N/A'})` : 'Não'}</div>
                    </div>
                </div>
                <div>
                    <div class="field">
                        <div class="field-label">Data de Entrada</div>
                        <div class="field-value">${new Date(serviceData.dataEntrada).toLocaleDateString('pt-PT')}</div>
                    </div>
                </div>
            </div>
            <div class="field" style="margin-top: 16px;">
                <div class="field-label">Problema Reportado</div>
                <div class="field-value">${serviceData.descricaoProblema}</div>
            </div>
            ${serviceData.notas ? `
            <div class="field" style="margin-top: 16px;">
                <div class="field-label">Notas Técnicas</div>
                <div class="notes">${serviceData.notas}</div>
            </div>
            ` : ''}
        </div>
    </div>

    ${serviceData.pecas.length > 0 ? `
    <div class="section">
        <div class="section-title">Peças Utilizadas</div>
        <div class="section-content">
            <table class="parts-table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${serviceData.pecas.map(part => `
                    <tr>
                        <td class="code">${part.codigo}</td>
                        <td>${part.nome}</td>
                        <td class="number">${part.quantidade}</td>
                        <td class="number">${parseFloat(part.precoUnitario).toFixed(2)} €</td>
                        <td class="number">${parseFloat(part.total).toFixed(2)} €</td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>    </div>
    ` : ''}

    <div class="section">
        <div class="section-title">Descrição da Reparação</div>
        <div class="section-content">
            <div class="repair-description">
                <textarea class="repair-description-content" ></textarea>
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
        </div>    </div>

    <div class="signatures-section">
        <div class="section-title">Assinaturas</div>
        <div class="signatures-grid">
            <div class="signature-field">
                <div class="signature-label">Técnico Responsável</div>
                <div class="signature-line"></div>
                <div class="signature-sublabel">
                    ${serviceData.tecnico || '_______________________'}<br>
                    Nome e Assinatura
                </div>
            </div>
            <div class="signature-field">
                <div class="signature-label">Cliente</div>
                <div class="signature-line"></div>
                <div class="signature-sublabel">
                    ${serviceData.cliente.nome}<br>
                    Nome e Assinatura
                </div>
            </div>
        </div>
        <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 10px;">
            <p>Ao assinar este documento, o cliente confirma que ficou a funcionar em perfeitas condições.</p>
        </div>
    </div>

    <div class="footer">
        <p>Este documento foi gerado automaticamente em ${new Date().toLocaleDateString('pt-PT')} às ${new Date().toLocaleTimeString('pt-PT')}</p>
        <p>JMPC - Reparações Técnicas | Para qualquer questão, contacte-nos</p>
    </div>

    <script>
        function getStatusClass(status) {
            switch(status) {
                case 'pendente': return 'status-pending';
                case 'concluido': return 'status-completed';
                case 'aguarda_peca': return 'status-waiting';
                case 'resposta_marca': return 'status-response';
                default: return 'status-pending';
            }
        }
        
        function getStatusLabel(status) {
            switch(status) {
                case 'pendente': return 'Pendente';
                case 'concluido': return 'Concluído';
                case 'aguarda_peca': return 'Aguarda Peça';
                case 'resposta_marca': return 'Resposta da Marca';
                default: return status;
            }
        }
        
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

    printWindow.document.write(printHTML)
    printWindow.document.close()
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
