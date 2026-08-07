export const categories = [
  { id: 'men', name: 'បុរស', slug: 'men', image: '/categories/men.png' },
  { id: 'women', name: 'នារី', slug: 'women', image: '/categories/women.png' },
  { id: 'tshirts', name: 'អាវយឺត', slug: 't-shirts', image: '/categories/tshirts.png' },
  { id: 'hoodies', name: 'អាវហ៊ូឌី', slug: 'hoodies', image: '/categories/hoodies.png' },
  { id: 'accessories', name: 'គ្រឿងបន្លាស់', slug: 'accessories', image: '/categories/accessories.png' },
]

// Each product's `images` is an ordered array — images[0] is used as the
// card/grid thumbnail, and the full array powers the gallery + lightbox on
// the product detail page. Add or remove paths per product as you get more shots.
export const products = [
  {
    id: 'bw-basic-tee',
    name: 'Bubble White អាវយឺតធម្មតា',
    price: 19.99,
    compareAt: null,
    category: 't-shirts',
    badge: 'ថ្មី',
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/products/1.jpg', '/products/1-2.jpg', '/products/1-3.jpg'],
    description: 'អាវយឺតប្រចាំថ្ងៃធ្វើពីកប្បាសក្រាស់ស្តើងសមរម្យ។ ស្មើមុត ទន់ភ្លន់ ទំហំធំល្មម និងស្លាកគំនូរដេរតូចមួយនៅទ្រូង។',
  },
  {
    id: 'bw-hoodie',
    name: 'Bubble White អាវហ៊ូឌី',
    price: 39.99,
    compareAt: null,
    category: 'hoodies',
    badge: 'ថ្មី',
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/products/2.jpg', '/products/2-2.jpg', '/products/2-3.jpg'],
    description: 'អាវហ៊ូឌីរោមកម្រាស់មធ្យម មានពាក់ក្បាលមានស្រទាប់ក្នុង ស្មាទម្លាក់ និងស្លាកគំនូរនៅទ្រូង។ សមស្របសម្រាប់ស្លៀកពាក់ប្រចាំថ្ងៃ។',
  },
  {
    id: 'bw-oversize-tee',
    name: 'Bubble White អាវយឺតធំ',
    price: 24.99,
    compareAt: null,
    category: 't-shirts',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/products/3.jpg', '/products/3-2.jpg', '/products/3-3.jpg'],
    description: 'ម៉ូតធំទូលាយ ស្មាទម្លាក់ និងគំនូរដិតធំនៅមុខអាវ។ ក្រណាត់បោកជាមុនឱ្យមានអារម្មណ៍ទន់ភ្លន់តាំងពីថ្ងៃដំបូង។',
  },
  {
    id: 'bw-sweatshirt',
    name: 'Bubble White អាវយឺតកក់ក្តៅ',
    price: 35.99,
    compareAt: 39.99,
    category: 'men',
    badge: '-10%',
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/products/4.jpg', '/products/4-2.jpg', '/products/4-3.jpg'],
    description: 'អាវយឺតកក់ក្តៅក របូបខាងក្នុងទន់ភ្លន់។ សម្លៀកបំពាក់ចាំបាច់ដែលអាចផ្គូផ្គងជាមួយអ្វីៗគ្រប់យ៉ាង ចាប់ពីខោហាត់លំហាត់ រហូតដល់ខោបែបផ្លូវការ។',
  },
  {
    id: 'bw-cap',
    name: 'Bubble White មួកកាប់',
    price: 14.99,
    compareAt: null,
    category: 'accessories',
    badge: null,
    sizes: ['One Size'],
    images: ['/products/5.jpg', '/products/5-2.jpg'],
    description: 'មួកកាប់ប្រាំមួយផ្ទាំង រចនាឡើងមានទម្រង់រឹងមាំ ជាមួយស្លាកគំនូរដេរ និងខ្សែក្រវ៉ាត់ខាងក្រោយអាចលៃតម្រូវបាន។',
  },
  {
    id: 'bw-hoodie-cream',
    name: 'Bubble White អាវហ៊ូឌី',
    price: 39.99,
    compareAt: null,
    category: 'hoodies',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/products/6.jpg', '/products/6-2.jpg', '/products/6-3.jpg'],
    description: 'អាវហ៊ូឌីរោមកម្រាស់មធ្យម មានពាក់ក្បាលមានស្រទាប់ក្នុង ស្មាទម្លាក់ និងស្លាកគំនូរនៅទ្រូង។ សមស្របសម្រាប់ស្លៀកពាក់ប្រចាំថ្ងៃ។',
  },
  {
    id: 'bw-women-tee',
    name: 'Bubble White អាវយឺតនារី',
    price: 21.99,
    compareAt: null,
    category: 'women',
    badge: 'ថ្មី',
    sizes: ['XS', 'S', 'M', 'L'],
    images: ['/products/7.jpg', '/products/7-2.jpg', '/products/7-3.jpg'],
    description: 'អាវយឺតរចនាឡើងសមទ្រង់រាងកាយ ធ្វើពីកប្បាស Pima ទន់ភ្លន់ និងករបូបស្អាតស្អំ។',
  },
  {
    id: 'bw-crewneck',
    name: 'Bubble White អាវយឺតកគត់',
    price: 33.99,
    compareAt: null,
    category: 'men',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/products/8.jpg', '/products/8-2.jpg', '/products/8-3.jpg'],
    description: 'អាវយឺតកក់ក្តៅករគត់ស្អាត មានចង្កេះនិងជាយអាវជាប់ ធ្វើពីកប្បាសកម្រាស់មធ្យម។',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(product, limit = 4) {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit)
}
