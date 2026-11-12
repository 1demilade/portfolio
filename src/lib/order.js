// The order-message logic from Aso & Thread (src/lib/whatsapp.js and src/lib/format.js),
// reproduced here so the demo builds exactly the text the real product page builds.

const naira = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
})

/** 385000 -> "₦385,000" */
export function formatNaira(amount) {
  return naira.format(amount).replace('NGN', '₦').replace(/\s/g, '')
}

/** The exact text the visitor would send for one item. */
export function buildOrderMessage(item) {
  const each = item.quantity > 1 ? ` each (${formatNaira(item.price * item.quantity)})` : ''
  return [
    'Hello Aso & Thread, I would like to order:',
    '',
    item.name,
    `   Colour: ${item.colour}`,
    `   Size: ${item.size}`,
    `   Quantity: ${item.quantity}`,
    `   Price: ${formatNaira(item.price)}${each}`,
    '',
    `Total: ${formatNaira(item.price * item.quantity)} before delivery`,
    '',
    'Please confirm availability and delivery to: ',
  ].join('\n')
}

/** The sample product the demo uses, copied from Aso & Thread's catalogue. */
export const DEMO_PRODUCT = {
  name: 'Ọlá Agbada Set',
  price: 385000,
  colours: [
    { name: 'Olive', hex: '#5d5f2e' },
    { name: 'Etu black', hex: '#1d1c1f' },
  ],
  sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Made to measure'],
}
