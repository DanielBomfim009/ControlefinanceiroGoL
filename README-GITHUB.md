# GoL Buy Smart - PWA Financeiro

Dashboard Financeiro Inteligente - Controle suas finanças pessoais de forma simples e eficiente.

## 🆕 Novidades da Versão 4.0

### ✨ Controle de Pagamentos
Nova aba exclusiva para gerenciar status de recebimentos e pagamentos:
- **Receitas**: Marque como "Recebido" ou "A Receber"
- **Despesas**: Marque como "Pago" ou "A Pagar"
- **Dashboard**: Visualize alertas de pendências diretamente na tela inicial
- **Resumo**: Veja totais de valores pendentes e já recebidos/pagos

### 📱 Arquivos para APK

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Aplicação principal (v4.0) |
| `manifest.json` | Configurações do PWA |
| `sw.js` | Service Worker para funcionamento offline |
| `logo-192.png` | Ícone 192x192 pixels |
| `logo-512.png` | Ícone 512x512 pixels |

## 🚀 Como Hospedar no GitHub Pages

1. **Crie um repositório no GitHub**
   - Acesse github.com e crie um novo repositório

2. **Faça upload dos arquivos**
   - Faça upload de todos os 5 arquivos listados acima
   - Certifique-se de que estão na raiz do repositório

3. **Ative o GitHub Pages**
   - Vá em Settings → Pages
   - Em "Source", selecione "main" branch
   - Clique em Save

4. **Acesse sua aplicação**
   - Aguarde alguns minutos
   - Acesse: `https://seuusuario.github.io/nome-do-repositorio`

## 📲 Como Converter para APK

### Opção 1: PWA Builder (Recomendado)
1. Acesse: https://www.pwabuilder.com/
2. Cole a URL do seu GitHub Pages
3. Clique em "Start" para analisar
4. Baixe o APK gerado

### Opção 2: WebIntoApp (Gratuito)
1. Acesse: https://webintoapp.com/
2. Cole a URL do seu site
3. Siga as instruções para gerar o APK

## ✅ Funcionalidades

### Dashboard
- 📊 Resumo financeiro (saldo, receitas, despesas, economia)
- 🔔 Alertas de pendências (valores a receber/pagar)
- 📈 Gastos por categoria
- 📋 Transações recentes com indicador de status

### Controle de Pagamentos (NOVO!)
- 💰 Receitas: "Recebido" / "A Receber"
- 💸 Despesas: "Pago" / "A Pagar"
- 📊 Resumo de pendências
- 🔄 Alternar status com um clique
- 🔍 Filtros: Todos, Pendentes, Concluídos

### Transações
- ➕ Adicionar receitas e despesas
- 🏷️ Categorias personalizadas
- 💳 Métodos de pagamento
- 📅 Data e observações
- 🔍 Busca e filtros

### Calendário
- 📆 Visualização mensal
- 🎯 Indicadores de transações por dia
- 📊 Resumo do mês

### Metas
- 🎯 Criar metas financeiras
- 📊 Acompanhar progresso

### Relatórios
- 📈 Resumo geral
- 🏆 Top gastos

### Configurações
- 👤 Perfil do usuário com foto
- 💾 Exportar backup
- 🗑️ Apagar dados

## 🔧 Tecnologias

- HTML5, CSS3, JavaScript
- Tailwind CSS (via CDN)
- LocalStorage para persistência
- Service Worker para PWA
- Design responsivo mobile-first

## 📋 Requisitos para PWA

✅ manifest.json configurado
✅ Service Worker (sw.js)
✅ Ícones em 192x192 e 512x512
✅ HTTPS (GitHub Pages fornece automaticamente)
✅ Meta tags PWA

## 🎨 Personalização

Para mudar a cor do tema, edite o `manifest.json`:
```json
{
  "theme_color": "#00b4a0",
  "background_color": "#0d1f2d"
}
```

## 📊 Estrutura de Dados

As transações agora incluem o campo `status`:
```javascript
{
  id: "1234567890",
  type: "income", // ou "expense"
  amount: 1500.00,
  description: "Salário",
  date: "2024-01-15",
  category: "salary",
  paymentMethod: "pix",
  status: "paid", // "paid" ou "pending"
  notes: ""
}
```

---

**Versão 4.0** - Com controle de pagamentos e recebimentos

Desenvolvido com ❤️ para controle financeiro pessoal
