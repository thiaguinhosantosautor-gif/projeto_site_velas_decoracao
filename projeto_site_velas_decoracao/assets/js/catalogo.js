
// ========== BASE DE DADOS DOS PRODUTOS ========== 
const produtos = [
    // Velas
    { id: 1, nome: "Vela Aromática Lavanda", categoria: "velas", preco: 39.90, imagem: "vela-lavanda.jpg", descricao: "Vela de cera de soja com óleo essencial de lavanda." },
    { id: 2, nome: "Vela Aromática Baunilha", categoria: "velas", preco: 42.90, imagem: "vela-baunilha.jpg", descricao: "Aroma doce e aconchegante." },
    { id: 3, nome: "Vela Cítrica com Laranja", categoria: "velas", preco: 44.90, imagem: "vela-laranja.jpg", descricao: "Energizante e refrescante." },
    { id: 4, nome: "Vela Relax com Camomila", categoria: "velas", preco: 47.90, imagem: "vela-camomila.jpg", descricao: "Perfeita para meditação." },
    // Gesso
    { id: 5, nome: "Porta-velas Geométrico", categoria: "gesso", preco: 29.90, imagem: "porta-velas.jpg", descricao: "Design moderno em gesso." },
    { id: 6, nome: "Escultura de Gesso – Folha", categoria: "gesso", preco: 34.90, imagem: "escultura-folha.jpg", descricao: "Acabamento artesanal." },
    { id: 7, nome: "Mini vaso de gesso", categoria: "gesso", preco: 24.90, imagem: "vaso-gesso.jpg", descricao: "Ideal para suculentas." },
    // Outros
    { id: 8, nome: "Difusor de varetas", categoria: "outros", preco: 59.90, imagem: "difusor.jpg", descricao: "Fragrância de algodão." },
    { id: 9, nome: "Sabonete artesanal", categoria: "outros", preco: 15.90, imagem: "sabonete.jpg", descricao: "Glicerina vegetal." },
];

// ========== FUNÇÃO PARA CRIAR CARD DE PRODUTO ========== 
function criarCard(produto) {
    return `
        <div class="card" data-categoria="${produto.categoria}">
            <div class="card-img">
                <img src="assets/images/produtos/${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="card-conteudo">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
                <a href="#" class="btn-comprar" onclick="abrirWhatsApp('${produto.nome}', ${produto.preco}); return false;">Consultar via WhatsApp</a>
            </div>
        </div>
    `;
}

// ========== EXIBIR PRODUTOS NO CATÁLOGO ========== 
function exibirCatalogo(categoriaFiltro = "todos") {
    const container = document.getElementById('catalogo-container');
    if (!container) return;

    let produtosFiltrados = produtos;
    if (categoriaFiltro !== "todos") {
        produtosFiltrados = produtos.filter(p => p.categoria === categoriaFiltro);
    }

    container.innerHTML = produtosFiltrados.map(p => criarCard(p)).join('');
}

// ========== EXIBIR DESTAQUES NA HOME ========== 
function exibirDestaques() {
    const container = document.getElementById('destaques-container');
    if (!container) return;

    // Pega 3 produtos aleatórios para destaque
    const destaques = produtos.sort(() => 0.5 - Math.random()).slice(0, 3);
    container.innerHTML = destaques.map(p => criarCard(p)).join('');
}

// ========== FILTROS ========== 
function initFiltros() {
    const botoes = document.querySelectorAll('.filtro-btn');
    if (!botoes.length) return;

    botoes.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos
            botoes.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const categoria = btn.dataset.categoria;
            exibirCatalogo(categoria);
        });
    });
}

// ========== WHATSAPP ========== 
function abrirWhatsApp(nomeProduto, preco) {
    const numero = "5511999999999"; // Substitua pelo número real
    const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto} - R$ ${preco.toFixed(2)}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalogo-container')) {
        exibirCatalogo();
        initFiltros();
    }
});
