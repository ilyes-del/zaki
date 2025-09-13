"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ShoppingCart, Users, TrendingUp, Truck, DollarSign, Eye, Edit, Trash2 } from "lucide-react"

// Mock data for admin dashboard
const dashboardStats = [
	{
		title: "Total Revenue",
		value: "45,231.89 DA",
		change: "+20.1%",
		icon: DollarSign,
		trend: "up",
	},
	{
		title: "Orders",
		value: "2,350",
		change: "+180.1%",
		icon: ShoppingCart,
		trend: "up",
	},
	{
		title: "Products",
		value: "1,234",
		change: "+19%",
		icon: Package,
		trend: "up",
	},
	{
		title: "Active Users",
		value: "573",
		change: "+201",
		icon: Users,
		trend: "up",
	},
]

const recentOrders = [
	{
		id: "ORD-001",
		customer: "John Doe",
		product: "Premium Wireless Headphones",
		amount: "299.99 DA",
		status: "delivered",
		zrStatus: "completed",
		date: "2024-01-15",
	},
	{
		id: "ORD-002",
		customer: "Jane Smith",
		product: "Smart Fitness Watch",
		amount: "199.99 DA",
		status: "shipped",
		zrStatus: "in-transit",
		date: "2024-01-14",
	},
	{
		id: "ORD-003",
		customer: "Mike Johnson",
		product: "Organic Cotton T-Shirt",
		amount: "29.99 DA",
		status: "processing",
		zrStatus: "preparing",
		date: "2024-01-14",
	},
	{
		id: "ORD-004",
		customer: "Sarah Wilson",
		product: "Professional Camera Lens",
		amount: "899.99 DA",
		status: "pending",
		zrStatus: "pending",
		date: "2024-01-13",
	},
]

const products = [
	{
		id: "1",
		name: "Premium Wireless Headphones",
		price: "299.99 DA",
		stock: 45,
		sold: 124,
		status: "active",
	},
	{
		id: "2",
		name: "Smart Fitness Watch",
		price: "199.99 DA",
		stock: 23,
		sold: 89,
		status: "active",
	},
	{
		id: "3",
		name: "Organic Cotton T-Shirt",
		price: "29.99 DA",
		stock: 156,
		sold: 203,
		status: "active",
	},
	{
		id: "4",
		name: "Professional Camera Lens",
		price: "899.99 DA",
		stock: 8,
		sold: 67,
		status: "low-stock",
	},
]

function getStatusColor(status: string) {
	switch (status) {
		case "delivered":
		case "completed":
		case "active":
			return "bg-green-100 text-green-800"
		case "shipped":
		case "in-transit":
			return "bg-blue-100 text-blue-800"
		case "processing":
		case "preparing":
			return "bg-yellow-100 text-yellow-800"
		case "pending":
			return "bg-gray-100 text-gray-800"
		case "low-stock":
			return "bg-red-100 text-red-800"
		default:
			return "bg-gray-100 text-gray-800"
	}
}

export default function AdminDashboard() {
	const [activeTab, setActiveTab] = useState("overview")

	return (
		<div className="min-h-screen bg-background p-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
					<p className="text-muted-foreground">Manage your Promo Market and ZR Express deliveries</p>
				</div>

				<Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="orders">Orders</TabsTrigger>
						<TabsTrigger value="products">Products</TabsTrigger>
						<TabsTrigger value="zr-express">ZR Express</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-6">
						{/* Stats Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{dashboardStats.map((stat, index) => (
								<Card key={index}>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
										<stat.icon className="h-4 w-4 text-muted-foreground" />
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">{stat.value}</div>
										<p className="text-xs text-muted-foreground">
											<span className="text-green-600">{stat.change}</span> from last month
										</p>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Recent Orders */}
						<Card>
							<CardHeader>
								<CardTitle>Recent Orders</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{recentOrders.slice(0, 5).map((order) => (
										<div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
											<div className="flex-1">
												<div className="flex items-center gap-4">
													<div>
														<p className="font-medium">{order.id}</p>
														<p className="text-sm text-muted-foreground">{order.customer}</p>
													</div>
													<div className="flex-1">
														<p className="text-sm">{order.product}</p>
														<p className="text-sm text-muted-foreground">{order.date}</p>
													</div>
												</div>
											</div>
											<div className="flex items-center gap-4">
												<span className="font-medium">{order.amount}</span>
												<Badge className={getStatusColor(order.status)}>{order.status}</Badge>
												<Badge className={getStatusColor(order.zrStatus)} variant="outline">
													ZR: {order.zrStatus}
												</Badge>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="orders" className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>All Orders</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{recentOrders.map((order) => (
										<div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
											<div className="flex-1">
												<div className="flex items-center gap-4">
													<div>
														<p className="font-medium">{order.id}</p>
														<p className="text-sm text-muted-foreground">{order.customer}</p>
													</div>
													<div className="flex-1">
														<p className="text-sm">{order.product}</p>
														<p className="text-sm text-muted-foreground">{order.date}</p>
													</div>
												</div>
											</div>
											<div className="flex items-center gap-4">
												<span className="font-medium">{order.amount}</span>
												<Badge className={getStatusColor(order.status)}>{order.status}</Badge>
												<Badge className={getStatusColor(order.zrStatus)} variant="outline">
													ZR: {order.zrStatus}
												</Badge>
												<div className="flex gap-2">
													<Button variant="ghost" size="icon">
														<Eye className="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="icon">
														<Edit className="h-4 w-4" />
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="products" className="space-y-6">
						<div className="flex justify-between items-center">
							<h2 className="text-2xl font-bold">Products</h2>
							<Button>Add Product</Button>
						</div>

						<Card>
							<CardContent className="p-0">
								<div className="space-y-4 p-6">
									{products.map((product) => (
										<div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
											<div className="flex-1">
												<p className="font-medium">{product.name}</p>
												<p className="text-sm text-muted-foreground">
													Stock: {product.stock} | Sold: {product.sold}
												</p>
											</div>
											<div className="flex items-center gap-4">
												<span className="font-medium">{product.price}</span>
												<Badge className={getStatusColor(product.status)}>{product.status}</Badge>
												<div className="flex gap-2">
													<Button variant="ghost" size="icon">
														<Eye className="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="icon">
														<Edit className="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
														<Trash2 className="h-4 w-4" />
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="zr-express" className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">Active Deliveries</CardTitle>
									<Truck className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">47</div>
									<p className="text-xs text-muted-foreground">
										<span className="text-green-600">+12%</span> from yesterday
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">Same-Day Deliveries</CardTitle>
									<TrendingUp className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">23</div>
									<p className="text-xs text-muted-foreground">
										<span className="text-green-600">+8%</span> from yesterday
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">Delivery Success Rate</CardTitle>
									<Package className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">98.5%</div>
									<p className="text-xs text-muted-foreground">
										<span className="text-green-600">+0.2%</span> from last week
									</p>
								</CardContent>
							</Card>
						</div>

						<Card>
							<CardHeader>
								<CardTitle>ZR Express Delivery Status</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{recentOrders.map((order) => (
										<div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
											<div className="flex items-center gap-4">
												<Truck className="h-5 w-5 text-primary" />
												<div>
													<p className="font-medium">{order.id}</p>
													<p className="text-sm text-muted-foreground">{order.customer}</p>
												</div>
												<div className="flex-1">
													<p className="text-sm">{order.product}</p>
													<p className="text-sm text-muted-foreground">ZR Express Tracking</p>
												</div>
											</div>
											<div className="flex items-center gap-4">
												<Badge className={getStatusColor(order.zrStatus)}>{order.zrStatus}</Badge>
												<Button variant="outline" size="sm">
													Track
												</Button>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
