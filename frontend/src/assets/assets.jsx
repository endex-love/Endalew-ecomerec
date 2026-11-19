
import p_img1 from './p_img1.png';
import p_img2 from './p_img2.png';
import p_img3 from './p_img3.png';
import p_img4 from './p_img4.png';
import p_img5 from './p_img5.png';
import p_img6 from './p_img6.png';

export const assets = {
    logo: '',
    hero_img: '',
};

export const products = [
    {
        _id: 'aaaaa',
        name: 'Women Round Neck Cotton Top',
        description: 'A comfortable and stylish cotton top for everyday wear.',
        price: 100,
        image: [p_img1, p_img2],
        category: 'Women',
        subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: 'aaaab',
        name: 'Men Round Neck Pure Cotton T-shirt',
        description: 'Premium quality cotton T-shirt for men.',
        price: 150,
        image: [p_img2, p_img3],
        category: 'Men',
        subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: 'aaaac',
        name: 'Women Stylish Jacket',
        description: 'Modern jacket designed for comfort and fashion.',
        price: 250,
        image: [p_img3, p_img4],
        category: 'Women',
        subCategory: 'Winterwear',
        sizes: ['S', 'M', 'L'],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: 'aaaad',
        name: 'Men Casual Shirt',
        description: 'A stylish casual shirt suitable for daily use.',
        price: 200,
        image: [p_img4, p_img5],
        category: 'Men',
        subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL'],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: 'aaaae',
        name: 'Women Denim Jeans',
        description: 'Comfortable denim jeans with a modern design.',
        price: 300,
        image: [p_img5, p_img6],
        category: 'Women',
        subCategory: 'Bottomwear',
        sizes: ['S', 'M', 'L', 'XL'],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: 'aaaaf',
        name: 'Men Casual Trousers',
        description: 'Comfortable trousers for casual and formal occasions.',
        price: 280,
        image: [p_img6, p_img1],
        category: 'Men',
        subCategory: 'Bottomwear',
        sizes: ['M', 'L', 'XL'],
        date: Date.now(),
        bestseller: true
    }
];
