import { Truck, Shield, Clock, Headphones } from "lucide-react"

const features = [
	{
		icon: Truck,
		title: "ZR Express Delivery",
		description:
			"Same-day delivery available with real-time tracking and secure handling of your orders.",
	},
	{
		icon: Shield,
		title: "Secure Shopping",
		description:
			"Your data and payments are protected with industry-leading security measures.",
	},
	{
		icon: Clock,
		title: "24/7 Service",
		description:
			"Round-the-clock customer support and order processing for your convenience.",
	},
	{
		icon: Headphones,
		title: "Expert Support",
		description:
			"Dedicated customer service team ready to help with any questions or concerns.",
	},
]

export function Features() {
	return (
		<section className="py-16 sm:py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
						Why Choose Promo Market
					</h2>
					<p className="mt-4 text-lg text-muted-foreground text-pretty">
						Experience the difference with our premium service and delivery
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<feature.icon className="h-8 w-8 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-foreground">
								{feature.title}
							</h3>
							<p className="text-muted-foreground text-pretty">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
