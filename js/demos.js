// js/demos.js - Lógica para los interactivos y simuladores en vivo

// --- 1. DEMO ECOMMERCE / CATÁLOGO WHATSAPP ---
const DEMO_PRODUCTS = [
  {
    id: 1,
    name: "Café de Especialidad 250g",
    category: "Cafetería / Almacén",
    price: 4500,
    emoji: "☕"
  },
  {
    id: 2,
    name: "Sandwich de Jamón Crudo & Rúcula",
    category: "Gastronomía",
    price: 5200,
    emoji: "🥪"
  },
  {
    id: 3,
    name: "Remera Algodón Peinado (Talles S al XL)",
    category: "Indumentaria",
    price: 14900,
    emoji: "👕"
  }
];

let cart = {};

function initDemoEcommerce() {
  const grid = document.getElementById("demo-products-grid");
  if (!grid) return;

  grid.innerHTML = DEMO_PRODUCTS.map(product => `
    <div class="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm">
      <div>
        <div class="text-3xl mb-2">${product.emoji}</div>
        <div class="text-[11px] font-semibold text-slate-400 uppercase">${product.category}</div>
        <h4 class="font-bold text-slate-900 text-sm mt-0.5">${product.name}</h4>
        <div class="font-extrabold text-slate-900 text-base mt-2">$${product.price.toLocaleString('es-AR')}</div>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <button onclick="addToDemoCart(${product.id})" class="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 active:scale-95">
          <span>+ Agregar al pedido</span>
        </button>
      </div>
    </div>
  `).join('');

  updateCartDisplay();
}

function addToDemoCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  updateCartDisplay();
}

function resetDemoCart() {
  cart = {};
  updateCartDisplay();
}

function updateCartDisplay() {
  const totalEl = document.getElementById("demo-cart-total");
  const previewEl = document.getElementById("demo-whatsapp-preview");
  if (!totalEl || !previewEl) return;

  let total = 0;
  let itemsList = [];

  for (const [id, qty] of Object.entries(cart)) {
    const prod = DEMO_PRODUCTS.find(p => p.id === parseInt(id));
    if (prod) {
      total += prod.price * qty;
      itemsList.push(`• ${qty}x ${prod.name} ($${(prod.price * qty).toLocaleString('es-AR')})`);
    }
  }

  totalEl.textContent = `$${total.toLocaleString('es-AR')}`;

  if (itemsList.length === 0) {
    previewEl.innerHTML = `<span class="italic text-slate-400">Seleccioná productos arriba para ver el pedido generado...</span>`;
  } else {
    const message = `<strong>Resumen de compra:</strong><br>${itemsList.join('<br>')}<br><strong>Total a cobrar: $${total.toLocaleString('es-AR')}</strong>`;
    previewEl.innerHTML = message;
  }
}

function simulateOrderSend() {
  const itemsCount = Object.keys(cart).length;
  if (itemsCount === 0) {
    alert("¡Sumá algún producto primero haciendo clic en '+ Agregar al pedido'!");
    return;
  }
  alert("🎉 ¡Simulación exitosa!\n\nEn tu negocio real, el cliente confirma la compra y a vos te entra el pedido con el detalle exacto de productos, cantidades y total listo para preparar y cobrar.");
}


// --- 2. DEMO PANEL DE STOCK E INVENTARIO ---
let demoStockData = [
  { id: 1, name: "Harina 000 x 1kg", price: 1200, stock: 14, minStock: 5 },
  { id: 2, name: "Gaseosa Cola 1.5L", price: 2100, stock: 4, minStock: 5 },
  { id: 3, name: "Caja de Bombones x 12", price: 6500, stock: 2, minStock: 3 },
  { id: 4, name: "Yerba Mate 500g", price: 2800, stock: 18, minStock: 5 }
];

function initDemoStock() {
  renderStockTable();
}

function renderStockTable() {
  const tbody = document.getElementById("demo-stock-tbody");
  if (!tbody) return;

  tbody.innerHTML = demoStockData.map(item => {
    const isLow = item.stock <= item.minStock && item.stock > 0;
    const isOutOfStock = item.stock === 0;

    let badgeClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    let badgeText = "Normal";

    if (isOutOfStock) {
      badgeClass = "bg-red-50 text-red-700 border-red-200 font-bold";
      badgeText = "Agotado";
    } else if (isLow) {
      badgeClass = "bg-amber-50 text-amber-700 border-amber-200 font-semibold";
      badgeText = "⚠️ Stock Bajo";
    }

    return `
      <tr class="hover:bg-slate-50/50 transition-colors">
        <td class="py-3 px-3 font-semibold text-slate-800">${item.name}</td>
        <td class="py-3 px-3 text-slate-600">$${item.price.toLocaleString('es-AR')}</td>
        <td class="py-3 px-3 font-extrabold ${isOutOfStock ? 'text-red-600' : isLow ? 'text-amber-600' : 'text-slate-900'}">${item.stock} u.</td>
        <td class="py-3 px-3">
          <span class="inline-block text-[11px] px-2 py-0.5 rounded-full border ${badgeClass}">
            ${badgeText}
          </span>
        </td>
        <td class="py-3 px-3 text-right space-x-1">
          <button onclick="sellOneStockItem(${item.id})" ${isOutOfStock ? 'disabled' : ''} class="px-2.5 py-1 text-xs font-semibold rounded bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95" title="Registrar venta de 1 unidad">
            -1 Venta
          </button>
          <button onclick="restockItem(${item.id})" class="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all active:scale-95" title="Ingresar mercadería">
            +5 Ingreso
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function sellOneStockItem(id) {
  const item = demoStockData.find(i => i.id === id);
  if (item && item.stock > 0) {
    item.stock -= 1;
    renderStockTable();
  }
}

function restockItem(id) {
  const item = demoStockData.find(i => i.id === id);
  if (item) {
    item.stock += 5;
    renderStockTable();
  }
}

function resetDemoStock() {
  demoStockData = [
    { id: 1, name: "Harina 000 x 1kg", price: 1200, stock: 14, minStock: 5 },
    { id: 2, name: "Gaseosa Cola 1.5L", price: 2100, stock: 4, minStock: 5 },
    { id: 3, name: "Caja de Bombones x 12", price: 6500, stock: 2, minStock: 3 },
    { id: 4, name: "Yerba Mate 500g", price: 2800, stock: 18, minStock: 5 }
  ];
  renderStockTable();
}


// --- 3. CAMBIO DE PESTAÑAS DE DEMOS ---
function switchDemoTab(tabName) {
  // Ocultar todos los paneles
  const panels = document.querySelectorAll('.demo-content-panel');
  panels.forEach(p => p.classList.add('hidden'));

  // Resetear estado de botones
  const buttons = document.querySelectorAll('.demo-tab-btn');
  buttons.forEach(b => {
    b.classList.remove('active', 'bg-slate-100', 'text-slate-900');
    b.classList.add('text-slate-500');
  });

  // Mostrar el panel seleccionado
  const targetPanel = document.getElementById(`demo-${tabName}`);
  const targetBtn = document.getElementById(`tab-btn-${tabName}`);

  if (targetPanel) {
    targetPanel.classList.remove('hidden');
    targetPanel.classList.add('animate-fade-in');
  }

  if (targetBtn) {
    targetBtn.classList.add('active', 'bg-slate-100', 'text-slate-900');
    targetBtn.classList.remove('text-slate-500');
  }

  // Refrescar iconos Lucide por si se cargaron nuevos elementos
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  initDemoEcommerce();
  initDemoStock();
});

