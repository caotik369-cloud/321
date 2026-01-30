function comprar(modelo) {
  const mensaje = `Hola! Quiero comprar la almohada ${modelo}`;
  const numero = "54911XXXXXXXX";
  window.location.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

