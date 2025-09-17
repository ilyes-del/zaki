import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types/product";

const featuredProducts: Product[] = [
	{
		id: "1",
		name: "سماعات رأس لاسلكية ممتازة",
		price: 299.99,
		originalPrice: 399.99,
		image: "/premium-wireless-headphones.png",
		rating: 4.8,
		reviews: 124,
		category: "إلكترونيات",
		inStock: true,
		description: "سماعات عالية الجودة مع خاصية إلغاء الضوضاء",
	},
	{
		id: "2",
		name: "ساعة لياقة ذكية",
		price: 199.99,
		originalPrice: 249.99,
		image: "/smart-fitness-watch.png",
		rating: 4.6,
		reviews: 89,
		category: "إكسسوارات",
		inStock: true,
		description: "تتبع متقدم للياقة مع مراقبة معدل ضربات القلب",
	},
	{
		id: "3",
		name: "تي شيرت قطن عضوي",
		price: 29.99,
		originalPrice: 39.99,
		image: "/organic-cotton-t-shirt.jpg",
		rating: 4.9,
		reviews: 203,
		category: "ملابس",
		inStock: true,
		description: "تي شيرت مريح وصديق للبيئة من القطن العضوي",
	},
	{
		id: "4",
		name: "عدسة كاميرا احترافية",
		price: 899.99,
		originalPrice: 1099.99,
		image: "/professional-camera-lens.jpg",
		rating: 4.7,
		reviews: 67,
		category: "تصوير",
		inStock: true,
		description: "عدسة احترافية لصور مذهلة",
	},
];

export default function ProductsPage() {
	const { addItem } = useCart();

	const handleAddToCart = (product: Product) => {
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			quantity: 1,
		});
	};

	return (
		<div className="min-h-screen bg-background" dir="rtl" lang="ar">
			<Header />
			<main className="container py-12">
				<h1 className="text-3xl font-bold text-red-600 mb-8">كل المنتجات</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{featuredProducts.map((product) => (
						<Card
							key={product.id}
							className="group overflow-hidden hover:shadow-lg transition-shadow"
						>
							<CardContent className="p-0">
								<div className="relative overflow-hidden">
									<img
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										className="w-full h-64 object-cover transition-transform group-hover:scale-105"
									/>
									{product.originalPrice > product.price && (
										<Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
											تخفيض
										</Badge>
									)}
								</div>
								<div className="p-4">
									<div className="flex items-center gap-1 mb-2">
										<div className="flex items-center">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`h-4 w-4 ${
														i < Math.floor(product.rating)
															? "fill-yellow-400 text-yellow-400"
															: "text-muted-foreground"
													}`}
												/>
											))}
										</div>
										<span className="text-sm text-muted-foreground">
											({product.reviews})
										</span>
									</div>
									<h3 className="font-semibold text-foreground mb-2 line-clamp-2">
										{product.name}
									</h3>
									<div className="flex items-center gap-2 mb-3">
										<span className="text-lg font-bold text-foreground">
											{product.price} دج
										</span>
										{product.originalPrice > product.price && (
											<span className="text-sm text-muted-foreground line-through">
												{product.originalPrice} دج
											</span>
										)}
									</div>
								</div>
							</CardContent>
							<CardFooter className="p-4 pt-0">
								<Button
									className="w-full bg-red-600 text-white hover:bg-red-700"
									onClick={() => handleAddToCart(product)}
								>
									<ShoppingCart className="mr-2 h-4 w-4" />
									أضف إلى السلة
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}
