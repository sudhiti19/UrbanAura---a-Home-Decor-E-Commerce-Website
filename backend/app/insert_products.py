from app.database import SessionLocal
from app.models import Product
products = [
    # 🕯️ Candles
    {"name": "Scented Candle - Lavender Bliss", "description": "Aromatic lavender candle.", "price": 299.0, "image_url": "/assets/candle1.jpg", "category": "candles"},
    {"name": "Vanilla Bean Aromatherapy Candle", "description": "Relaxing vanilla scent.", "price": 349.0, "image_url": "/assets/candle2.jpg", "category": "candles"},
    {"name": "Rose Petal Soy Wax Candle", "description": "Romantic rose fragrance.", "price": 399.0, "image_url": "/assets/candle3.jpg", "category": "candles"},
    {"name": "Jasmine & Sandalwood Candle", "description": "Sweet & woody aroma.", "price": 450.0, "image_url": "/assets/candle4.jpg", "category": "candles"},
    {"name": "Handmade Beeswax Pillar Candle", "description": "Natural and eco-friendly.", "price": 499.0, "image_url": "/assets/candle5.jpg", "category": "candles"},
    {"name": "Cinnamon Spice Wooden Wick Candle", "description": "Warm spicy vibes.", "price": 549.0, "image_url": "/assets/candle6.jpg", "category": "candles"},
    {"name": "Ocean Breeze Decorative Candle", "description": "Fresh sea scent.", "price": 599.0, "image_url": "/assets/candle7.jpg", "category": "candles"},
    {"name": "Luxury Gift Box Candle Set", "description": "Perfect for gifting.", "price": 699.0, "image_url": "/assets/candle8.jpg", "category": "candles"},

    # 🕰️ Clocks
    {"name": "Vintage Wooden Wall Clock", "description": "Rustic wooden look.", "price": 399.0, "image_url": "/assets/clock1.jpg", "category": "clocks"},
    {"name": "Classic Roman Numeral Clock", "description": "Timeless roman design.", "price": 449.0, "image_url": "/assets/clock2.jpg", "category": "clocks"},
    {"name": "Modern Black Minimal Clock", "description": "Sleek and clean design.", "price": 499.0, "image_url": "/assets/clock3.jpg", "category": "clocks"},
    {"name": "Luxury Brass Designer Clock", "description": "Elegant statement piece.", "price": 599.0, "image_url": "/assets/clock4.jpg", "category": "clocks"},
    {"name": "Rustic Farmhouse Style Clock", "description": "Chic country look.", "price": 649.0, "image_url": "/assets/clock5.jpg", "category": "clocks"},
    {"name": "Silent Non-Ticking Clock", "description": "Perfect for bedrooms.", "price": 699.0, "image_url": "/assets/clock6.jpg", "category": "clocks"},
    {"name": "Decorative Wall Art Clock", "description": "Artistic + functional.", "price": 749.0, "image_url": "/assets/clock7.jpg", "category": "clocks"},
    {"name": "Oversized Industrial Clock", "description": "Bold statement piece.", "price": 799.0, "image_url": "/assets/clock8.jpg", "category": "clocks"},

    # 🖼️ Frames
    {"name": "Sepia Allure Set of 2 Photo Frames", "description": "Elegant brown finish.", "price": 199.0, "image_url": "/assets/frame1.jpg", "category": "frames"},
    {"name": "Classic Wooden Frame", "description": "Natural wood tone.", "price": 249.0, "image_url": "/assets/frame2.jpg", "category": "frames"},
    {"name": "Vintage Gold Metal Frame", "description": "Antique style.", "price": 299.0, "image_url": "/assets/frame3.jpg", "category": "frames"},
    {"name": "Black Border Glass Frame", "description": "Modern edge design.", "price": 349.0, "image_url": "/assets/frame4.jpg", "category": "frames"},
    {"name": "Rustic Brown Wooden Frame", "description": "Farmhouse vibe.", "price": 399.0, "image_url": "/assets/frame5.jpg", "category": "frames"},
    {"name": "Modern Acrylic Photo Frame", "description": "Minimalistic clear view.", "price": 449.0, "image_url": "/assets/frame6.jpg", "category": "frames"},
    {"name": "Decorative Patterned Frame", "description": "Fancy patterns.", "price": 499.0, "image_url": "/assets/frame7.jpg", "category": "frames"},
    {"name": "Luxury Designer Frame", "description": "Elegant and premium.", "price": 599.0, "image_url": "/assets/frame8.jpg", "category": "frames"},

    # 🌿 Plants
    {"name": "Mini Succulent in Ceramic Pot", "description": "Tiny desk decor.", "price": 249.0, "image_url": "/assets/plant1.jpg", "category": "plants"},
    {"name": "Artificial Bamboo Plant in Vase", "description": "Lifelike decor.", "price": 299.0, "image_url": "/assets/plant2.jpg", "category": "plants"},
    {"name": "Hanging Ivy Plant with Pot", "description": "Green & graceful.", "price": 349.0, "image_url": "/assets/plant3.jpg", "category": "plants"},
    {"name": "Real Snake Plant in Clay Pot", "description": "Air-purifying decor.", "price": 399.0, "image_url": "/assets/plant4.jpg", "category": "plants"},
    {"name": "Lavender Pot with Decorative Vase", "description": "Relaxing purple hues.", "price": 449.0, "image_url": "/assets/plant5.jpg", "category": "plants"},
    {"name": "Bonsai Tree in Glass Pot", "description": "Elegant small bonsai.", "price": 499.0, "image_url": "/assets/plant6.jpg", "category": "plants"},
    {"name": "Artificial Potted Cactus", "description": "Cute & safe cactus.", "price": 549.0, "image_url": "/assets/plant7.jpg", "category": "plants"},
    {"name": "Decorative Green Plant Set", "description": "Lush greenery.", "price": 599.0, "image_url": "/assets/plant8.jpg", "category": "plants"},

    # 🪵 Shelves
    {"name": "Modern Floating Wall Shelf", "description": "Minimalist style.", "price": 799.0, "image_url": "/assets/shelf1.jpg", "category": "shelves"},
    {"name": "Rustic Wooden Display Shelf", "description": "Charming vintage touch.", "price": 899.0, "image_url": "/assets/shelf2.jpg", "category": "shelves"},
    {"name": "Corner Triangle Shelf", "description": "Perfect for corners.", "price": 999.0, "image_url": "/assets/shelf3.jpg", "category": "shelves"},
    {"name": "Metal Frame Wall Shelf Set", "description": "Sturdy and stylish.", "price": 1099.0, "image_url": "/assets/shelf4.jpg", "category": "shelves"},
    {"name": "Geometric Hexagon Shelf", "description": "Modern aesthetics.", "price": 1199.0, "image_url": "/assets/shelf5.jpg", "category": "shelves"},
    {"name": "Ladder Style Bookshelf", "description": "Trendy & vertical.", "price": 1299.0, "image_url": "/assets/shelf6.jpg", "category": "shelves"},
    {"name": "Multi-Tier Bamboo Shelf", "description": "Eco-friendly solution.", "price": 1399.0, "image_url": "/assets/shelf7.jpg", "category": "shelves"},
    {"name": "Industrial Pipe Wall Shelf", "description": "Urban loft look.", "price": 1499.0, "image_url": "/assets/shelf8.jpg", "category": "shelves"},

    # 🪞 Mirrors
    {"name": "Round Wooden Frame Mirror", "description": "Warm circular view.", "price": 699.0, "image_url": "/assets/mirror1.jpg", "category": "mirrors"},
    {"name": "Vintage Oval Wall Mirror", "description": "Antique elegance.", "price": 799.0, "image_url": "/assets/mirror2.jpg", "category": "mirrors"},
    {"name": "Sunburst Decorative Mirror", "description": "Radiant center focus.", "price": 899.0, "image_url": "/assets/mirror3.jpg", "category": "mirrors"},
    {"name": "Full-Length Standing Mirror", "description": "Complete reflection.", "price": 999.0, "image_url": "/assets/mirror4.jpg", "category": "mirrors"},
    {"name": "Antique Brass Finish Mirror", "description": "Luxury statement.", "price": 1099.0, "image_url": "/assets/mirror5.jpg", "category": "mirrors"},
    {"name": "Frameless Beveled Mirror", "description": "Simple and sleek.", "price": 1199.0, "image_url": "/assets/mirror6.jpg", "category": "mirrors"},
    {"name": "Modern Hexagonal Mirror", "description": "Unique hex design.", "price": 1299.0, "image_url": "/assets/mirror7.jpg", "category": "mirrors"},
    {"name": "LED Vanity Bathroom Mirror", "description": "Light up elegance.", "price": 1399.0, "image_url": "/assets/mirror8.jpg", "category": "mirrors"},

    # 🗿 Showpieces
    {"name": "Miniature Elephant Figurine", "description": "Symbol of luck.", "price": 299.0, "image_url": "/assets/show1.jpg", "category": "showpieces"},
    {"name": "Glass Swan Decorative Piece", "description": "Graceful swan shape.", "price": 349.0, "image_url": "/assets/show2.jpg", "category": "showpieces"},
    {"name": "Metallic Abstract Sculpture", "description": "Modern art style.", "price": 399.0, "image_url": "/assets/show3.jpg", "category": "showpieces"},
    {"name": "Resin Buddha Showpiece", "description": "Peaceful decor.", "price": 449.0, "image_url": "/assets/show4.jpg", "category": "showpieces"},
    {"name": "Wooden Horse Handicraft", "description": "Carved horse piece.", "price": 499.0, "image_url": "/assets/show5.jpg", "category": "showpieces"},
    {"name": "Marble Peacock Statue", "description": "Colorful peacock.", "price": 549.0, "image_url": "/assets/show6.jpg", "category": "showpieces"},
    {"name": "Vintage Gramophone Miniature", "description": "Old music charm.", "price": 599.0, "image_url": "/assets/show7.jpg", "category": "showpieces"},
    {"name": "Handcrafted Tribal Art Decor", "description": "Cultural beauty.", "price": 649.0, "image_url": "/assets/show8.jpg", "category": "showpieces"},

    # 🏺 Vases
    {"name": "Modern Glass Vase", "description": "Transparent vase for florals.", "price": 299.0, "image_url": "/assets/vase1.jpg", "category": "vases"},
    {"name": "Ceramic Hand-Painted Vase", "description": "Artistic detailing.", "price": 349.0, "image_url": "/assets/vase2.jpg", "category": "vases"},
    {"name": "Vintage Copper Flower Vase", "description": "Antique elegance.", "price": 399.0, "image_url": "/assets/vase3.jpg", "category": "vases"},
    {"name": "Textured Clay Table Vase", "description": "Earthy tones.", "price": 449.0, "image_url": "/assets/vase4.jpg", "category": "vases"},
    {"name": "Tall Transparent Vase", "description": "Modern height vase.", "price": 499.0, "image_url": "/assets/vase5.jpg", "category": "vases"},
    {"name": "Marble Finish Floor Vase", "description": "Luxurious finish.", "price": 549.0, "image_url": "/assets/vase6.jpg", "category": "vases"},
    {"name": "Decorative Woven Basket Vase", "description": "Boho style.", "price": 599.0, "image_url": "/assets/vase7.jpg", "category": "vases"},
    {"name": "Geometric Pattern Ceramic Vase", "description": "Contemporary chic.", "price": 649.0, "image_url": "/assets/vase8.jpg", "category": "vases"},
]
def insert_all_products():
    db = SessionLocal()
    try:
        for item in products:
            product = Product(**item)
            db.add(product)
        db.commit()
        print("✅ All products added successfully!")
    except Exception as e:
        db.rollback()
        print("❌ Error:", e)
    finally:
        db.close()

if __name__ == "__main__":
    insert_all_products()