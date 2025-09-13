"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ArrowLeft, Truck } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const promoMarketOptions = [
	{
		id: "standard",
		name: "Promo Market Standard",
		price: 799,
		estimatedDays: "3-5 business days",
		description: "Reliable delivery with tracking",
	},
	{
		id: "express",
		name: "Promo Market Express",
		price: 1599,
		estimatedDays: "1-2 business days",
		description: "Fast delivery with priority handling",
	},
	{
		id: "same-day",
		name: "Promo Market Same-Day",
		price: 2499,
		estimatedDays: "Same day",
		description: "Ultra-fast same-day delivery",
	},
]

export default function CartPage() {
	const { items, total, updateQuantity, removeItem } = useCart()

	if (items.length === 0) {
		return (
			<div className="min-h-screen bg-background">
				<Header />
				<main className="container mx-auto px-4 py-16 text-center">
					<h1 className="text-3xl font-bold mb-4 text-red-600">
						Your cart is empty
					</h1>
					<p className="text-muted-foreground mb-8">
						Add some products to get started
					</p>
					<Link href="/products">
						<Button className="bg-red-600 text-white hover:bg-red-700">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Continue Shopping
						</Button>
					</Link>
				</main>
				<Footer />
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<Link href="/products">
						<Button
							variant="ghost"
							className="mb-4 text-red-600 hover:underline"
						>
							<ArrowLeft className="mr-2 h-4 w-4" />
							Continue Shopping
						</Button>
					</Link>
					<h1 className="text-3xl font-bold text-red-600">Shopping Cart</h1>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2 space-y-4">
						{items.map((item) => (
							<Card key={item.id}>
								<CardContent className="p-6">
									<div className="flex items-center space-x-4">
										<img
											src={item.image || "/placeholder.svg"}
											alt={item.name}
											className="w-20 h-20 object-cover rounded-md"
										/>
										<div className="flex-1">
											<h3 className="font-semibold">{item.name}</h3>
											<p className="text-lg font-bold text-red-600">
												{item.price} DA
											</p>
										</div>
										<div className="flex items-center space-x-2">
											<Button
												variant="outline"
												size="icon"
												onClick={() =>
													updateQuantity(
														item.id,
														Math.max(0, item.quantity - 1)
													)
												}
												className="border-red-600 text-red-600"
											>
												<Minus className="h-4 w-4" />
											</Button>
											<span className="w-12 text-center">
												{item.quantity}
											</span>
											<Button
												variant="outline"
												size="icon"
												onClick={() =>
													updateQuantity(item.id, item.quantity + 1)
												}
												className="border-red-600 text-red-600"
											>
												<Plus className="h-4 w-4" />
											</Button>
										</div>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => removeItem(item.id)}
											className="text-red-600 hover:text-red-700"
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Order Summary */}
					<div className="space-y-6">
						{/* Promo Market Express Shipping Options */}
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center text-red-600">
									<Truck className="mr-2 h-5 w-5" />
									Promo Market Express Delivery
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{promoMarketOptions.map((option) => (
									<div
										key={option.id}
										className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-red-50 cursor-pointer"
									>
										<input
											type="radio"
											name="shipping"
											value={option.id}
											defaultChecked={option.id === "express"}
											className="accent-red-600"
										/>
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<span className="font-medium">{option.name}</span>
												<span className="font-bold text-red-600">
													{option.price} DA
												</span>
											</div>
											<p className="text-sm text-muted-foreground">
												{option.description}
											</p>
											<Badge
												variant="outline"
												className="mt-1 border-red-600 text-red-600"
											>
												{option.estimatedDays}
											</Badge>
										</div>
									</div>
								))}
							</CardContent>
						</Card>

						{/* Order Summary */}
						<Card>
							<CardHeader>
								<CardTitle className="text-red-600">Order Summary</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span>{total.toFixed(2)} DA</span>
								</div>
								<div className="flex justify-between">
									<span>Promo Market Express Shipping</span>
									<span>1599 DA</span>
								</div>
								<div className="flex justify-between">
									<span>Tax</span>
									<span>{(total * 0.08).toFixed(2)} DA</span>
								</div>
								<Separator />
								<div className="flex justify-between text-lg font-bold">
									<span>Total</span>
									<span>{(total + 1599 + total * 0.08).toFixed(2)} DA</span>
								</div>
								<Button
									className="w-full bg-red-600 text-white hover:bg-red-700"
									size="lg"
								>
									Proceed to Checkout
								</Button>
								<p className="text-xs text-muted-foreground text-center">
									Secure checkout powered by Promo Market Express
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
