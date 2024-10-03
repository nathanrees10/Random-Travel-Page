const destinations = [
    {
        name: "Kyoto, Japan",
        description: "Kyoto is known for its stunning temples, peaceful gardens, and rich cultural heritage. A perfect blend of modernity and tradition."
    },
    {
        name: "Reykjavik, Iceland",
        description: "Explore the land of fire and ice. Witness the Northern Lights, visit volcanic landscapes, and relax in natural hot springs."
    },
    {
        name: "Santorini, Greece",
        description: "Famous for its white-washed buildings and beautiful sunsets, Santorini is the epitome of a romantic getaway."
    },
    {
        name: "Machu Picchu, Peru",
        description: "Discover the lost city of the Incas nestled high in the Andes. A historic destination with breathtaking views."
    },
    {
        name: "Banff, Canada",
        description: "Experience the serene beauty of Banff National Park with its turquoise lakes, snow-capped peaks, and outdoor adventure opportunities."
    },
    {
        name: "Cape Town, South Africa",
        description: "A vibrant city with stunning beaches, the iconic Table Mountain, and diverse wildlife just a short drive away."
    },
    {
        name: "Queenstown, New Zealand",
        description: "An adventurer's paradise, offering bungee jumping, skydiving, and scenic hikes amidst some of the world's most beautiful landscapes."
    },
    {
        name: "Florence, Italy",
        description: "The heart of Renaissance art and culture, Florence boasts incredible museums, historic architecture, and world-class cuisine."
    },
    {
        name: "Bali, Indonesia",
        description: "A tropical haven with lush jungles, pristine beaches, and a rich spiritual culture. Perfect for relaxation and adventure alike."
    }
];

document.getElementById('generateButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const destination = destinations[randomIndex];
    
    document.getElementById('destination').textContent = destination.name;
    document.getElementById('description').textContent = destination.description;

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('show');
});
