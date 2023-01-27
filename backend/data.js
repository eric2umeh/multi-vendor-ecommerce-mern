import bcrypt from 'bcryptjs'

const data = {
    
    users: [
        {
            name: "Admin",
            email: "ricpewebcode@gmail.com",
            password: bcrypt.hashSync("admin"),
            address: "34000 Kragujevac, Serbia",
            phone: "+381/5555555",
            image: "./assets/images/sellers/ja.png",
            isAdmin: true
        },
        {
            name: "Ricpe",
            email: "miljanperic4@gmail.com",
            password: bcrypt.hashSync("ricpe"),
            address: "37230 Aleksandrovac, Serbia",
            phone: "+381/0000000",
            image: "./assets/images/sellers/seller.png",
            isAdmin: false
        }

    ],
    
    category: [
        {
            name: "Fruits"
        },
        {
            name: "Vegetables"
        }
    ],

    products: [
        {
            name: "Broccoli",
            slug: "broccoli",
            category: "vegetables",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
            price: "0.95",
            image: "./assets/images/products/2.png",
            seller: "Admin",
            sellerId: "63a729410d7aced810512bdc",
            sellerImage: "./assets/images/sellers/ja.png"
        },
        {
            name: "Watermelon",
            slug: "watermelon",
            category: "fruits",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
            price: "1.20",
            image: "./assets/images/products/1.png",
            seller: "Ricpe",
            sellerId: "63a729410d7aced810512bdc",
            sellerImage: "./assets/images/sellers/seller.png"
        },
        {
            name: "Guava",
            slug: "guava",
            category: "fruits",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
            price: "1.90",
            image: "./assets/images/products/3.png",
            seller: "Admin",
            sellerId: "63a729410d7aced810512bdc",
            sellerImage: "./assets/images/sellers/ja.png"
        }
    ]
}

export default data;