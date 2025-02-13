const data = [
  {
    category: "Beauty",
    branches: [
      {
        branchName: "Make Up",
        providers: [
          {
            id: "MAKEUPMN01",
            name: "Melanie Nayah",
            label: "Top Makeup Artist",
            serviceArea: ["Lekki 1", "Ikoyi"],
            clientsServed: 5,
            rating: 4.8,
            reviewsCount: 10,
            languages: ["English", "French"],
            availability: [
              { day: "Monday", time: "9:00 AM - 5:00 PM", type: "Full Day" },
              { day: "Wednesday", time: "9:00 AM - 1:00 PM", type: "Half Day" },
            ],
            specialty: "Bridal Makeup",
            gallery: [
              { imgUrl: "/explore/Makeup3 1 1.svg", label: "Wedding Look" },
              { imgUrl: "/explore/Makeup4 1.svg", label: "Evening Glam" },
              { imgUrl: "/explore/makeup .svg", label: "Casual Chic" },
            ],
            custRequests: ["Custom Bridal Makeup", "Special FX Makeup"],
            fixedBookings: [
              {
                approxDuration: "2 hours",
                fixedPrice: 200,
                description: "Standard Bridal Makeup",
              },
              {
                approxDuration: "1 hour",
                fixedPrice: 100,
                description: "Evening Makeup",
              },
            ],
            reviews: [
              {
                reviewerName: "Alice Doe",
                reviewDate: "2025-01-01",
                message: "Absolutely amazing work!",
              },
              {
                reviewerName: "Jane Smith",
                reviewDate: "2025-01-03",
                message: "Loved the bridal look!",
              },
            ],
          },
          {
            id: "MAKEUPSG02",
            name: "Sarah Glam",
            label: "Makeup Artist",
            serviceArea: ["Victoria Island", "Ajah"],
            clientsServed: 12,
            rating: 4.6,
            reviewsCount: 18,
            languages: ["English"],
            availability: [
              { day: "Tuesday", time: "10:00 AM - 4:00 PM", type: "Full Day" },
              { day: "Friday", time: "1:00 PM - 5:00 PM", type: "Half Day" },
            ],
            specialty: "Bridal Makeup",
            gallery: [
              { imgUrl: "/explore/Makeup4 1.svg", label: "Engagement Look" },
              { imgUrl: "/explore/Makeup3 1 1.svg", label: "Photo Shoot Glam" },
              {
                imgUrl: "/categories/beauty-providers/two.svg",
                label: "Party Look",
              },
            ],
            custRequests: ["Party Glam", "Engagement Makeup"],
            fixedBookings: [
              {
                approxDuration: "1.5 hours",
                fixedPrice: 150,
                description: "Standard Party Makeup",
              },
              {
                approxDuration: "2 hours",
                fixedPrice: 250,
                description: "Bridal Makeup Package",
              },
            ],
            reviews: [
              {
                reviewerName: "Betty Moore",
                reviewDate: "2025-01-02",
                message: "Sarah is amazing with her brushes!",
              },
              {
                reviewerName: "Anna Brown",
                reviewDate: "2025-01-05",
                message: "Highly recommend for party glam!",
              },
            ],
          },
          {
            id: "MAKEUPDF02",
            name: "Dominique Fashion",
            label: "Makeup Artist",
            serviceArea: ["Victoria Island", "Ajah"],
            clientsServed: 12,
            rating: 4.6,
            reviewsCount: 18,
            languages: ["English"],
            availability: [
              { day: "Tuesday", time: "10:00 AM - 4:00 PM", type: "Full Day" },
              { day: "Friday", time: "1:00 PM - 5:00 PM", type: "Half Day" },
            ],
            specialty: "Bridal Makeup",
            gallery: [
              { imgUrl: "/explore/makeup .svg", label: "Engagement Look" },
              {
                imgUrl: "/explore/Makeup3 1 1.svg",
                label: "Photo Shoot Glam",
              },
              {
                imgUrl: "/explore/Makeup4 1.svg",
                label: "Party Look",
              },
            ],
            custRequests: ["Party Glam", "Engagement Makeup"],
            fixedBookings: [
              {
                approxDuration: "1.5 hours",
                fixedPrice: 150,
                description: "Standard Party Makeup",
              },
              {
                approxDuration: "2 hours",
                fixedPrice: 250,
                description: "Bridal Makeup Package",
              },
            ],
            reviews: [
              {
                reviewerName: "Betty Moore",
                reviewDate: "2025-01-02",
                message: "Sarah is amazing with her brushes!",
              },
              {
                reviewerName: "Anna Brown",
                reviewDate: "2025-01-05",
                message: "Highly recommend for party glam!",
              },
            ],
          },
          {
            id: "MAKEUPMN01",
            name: "Melanie Nayah3",
            label: "Top Makeup Artist",
            serviceArea: ["Lekki 1", "Ikoyi"],
            clientsServed: 5,
            rating: 4.8,
            reviewsCount: 10,
            languages: ["English", "French"],
            availability: [
              { day: "Monday", time: "9:00 AM - 5:00 PM", type: "Full Day" },
              { day: "Wednesday", time: "9:00 AM - 1:00 PM", type: "Half Day" },
            ],
            specialty: "Bridal Makeup",
            gallery: [
              {
                imgUrl: "/home/woman.svg",
                label: "Wedding Look",
              },
              {
                imgUrl: "/explore/Makeup3 1 1.svg",
                label: "Evening Glam",
              },
              {
                imgUrl: "/explore/Makeup4 1.svg",
                label: "Casual Chic",
              },
            ],
            custRequests: ["Custom Bridal Makeup", "Special FX Makeup"],
            fixedBookings: [
              {
                approxDuration: "2 hours",
                fixedPrice: 200,
                description: "Standard Bridal Makeup",
              },
              {
                approxDuration: "1 hour",
                fixedPrice: 100,
                description: "Evening Makeup",
              },
            ],
            reviews: [
              {
                reviewerName: "Alice Doe",
                reviewDate: "2025-01-01",
                message: "Absolutely amazing work!",
              },
              {
                reviewerName: "Jane Smith",
                reviewDate: "2025-01-03",
                message: "Loved the bridal look!",
              },
            ],
          },
          {
            id: "MAKEUPSG02",
            name: "Sarah Glam2",
            label: "Makeup Artist",
            serviceArea: ["Victoria Island", "Ajah"],
            clientsServed: 12,
            rating: 4.6,
            reviewsCount: 18,
            languages: ["English"],
            availability: [
              { day: "Tuesday", time: "10:00 AM - 4:00 PM", type: "Full Day" },
              { day: "Friday", time: "1:00 PM - 5:00 PM", type: "Half Day" },
            ],
            specialty: "Bridal Makeup",
            gallery: [
              {
                imgUrl: "/explore/makeup .svg",
                label: "Engagement Look",
              },
              {
                imgUrl: "/categories/beauty-providers/two.svg",
                label: "Photo Shoot Glam",
              },
              {
                imgUrl: "/categories/beauty-providers/two.svg",
                label: "Party Look",
              },
            ],
            custRequests: ["Party Glam", "Engagement Makeup"],
            fixedBookings: [
              {
                approxDuration: "1.5 hours",
                fixedPrice: 150,
                description: "Standard Party Makeup",
              },
              {
                approxDuration: "2 hours",
                fixedPrice: 250,
                description: "Bridal Makeup Package",
              },
            ],
            reviews: [
              {
                reviewerName: "Betty Moore",
                reviewDate: "2025-01-02",
                message: "Sarah is amazing with her brushes!",
              },
              {
                reviewerName: "Anna Brown",
                reviewDate: "2025-01-05",
                message: "Highly recommend for party glam!",
              },
            ],
          },
          {
            id: "MAKEUPDF021",
            name: "Dominique Fashion2",
            label: "Makeup Artist",
            serviceArea: ["Victoria Island", "Ajah"],
            clientsServed: 12,
            rating: 4.6,
            reviewsCount: 18,
            languages: ["English"],
            availability: [
              { day: "Tuesday", time: "10:00 AM - 4:00 PM", type: "Full Day" },
              { day: "Friday", time: "1:00 PM - 5:00 PM", type: "Half Day" },
            ],
            specialty: "Bridal Makeup",
            gallery: [
              {
                imgUrl: "/categories/beauty-providers/three.svg",
                label: "Engagement Look",
              },
              {
                imgUrl: "/categories/beauty-providers/three.svg",
                label: "Photo Shoot Glam",
              },
              {
                imgUrl: "/categories/beauty-providers/three.svg",
                label: "Party Look",
              },
            ],
            custRequests: ["Party Glam", "Engagement Makeup"],
            fixedBookings: [
              {
                approxDuration: "1.5 hours",
                fixedPrice: 150,
                description: "Standard Party Makeup",
              },
              {
                approxDuration: "2 hours",
                fixedPrice: 250,
                description: "Bridal Makeup Package",
              },
            ],
            reviews: [
              {
                reviewerName: "Betty Moore",
                reviewDate: "2025-01-02",
                message: "Sarah is amazing with her brushes!",
              },
              {
                reviewerName: "Anna Brown",
                reviewDate: "2025-01-05",
                message: "Highly recommend for party glam!",
              },
            ],
          },
          // Add similar fields for remaining providers in Make Up branch...
        ],
      },
      {
        branchName: "Hair Tech",
        providers: [
          {
            id: "HAIRTECHHBT05",
            name: "Hair by Toni",
            label: "Top Hair Stylist",
            serviceArea: ["Lekki", "Victoria Island"],
            clientsServed: 50,
            rating: 4.8,
            reviewsCount: 45,
            languages: ["English", "Yoruba"],
            availability: [
              { day: "Monday", time: "8:00 AM - 3:00 PM", type: "Full Day" },
              { day: "Thursday", time: "10:00 AM - 2:00 PM", type: "Half Day" },
            ],
            specialty: "Braids and Styling",
            gallery: [
              {
                imgUrl: "/categories/hair-stylists/one.svg",
                label: "Braided Styles",
              },
              {
                imgUrl: "/categories/hair-stylists/one.svg",
                label: "Casual Styling",
              },
              {
                imgUrl: "/categories/hair-stylists/one.svg",
                label: "Wedding Styles",
              },
            ],
            custRequests: ["Custom Braids", "Wedding Hair Styling"],
            fixedBookings: [
              {
                approxDuration: "3 hours",
                fixedPrice: 300,
                description: "Wedding Hair Styling",
              },
              {
                approxDuration: "2 hours",
                fixedPrice: 150,
                description: "Braids",
              },
            ],
            reviews: [
              {
                reviewerName: "Chris Paul",
                reviewDate: "2025-01-01",
                message: "Toni styled my hair perfectly for my wedding!",
              },
              {
                reviewerName: "Linda Green",
                reviewDate: "2025-01-02",
                message: "Best hairstylist in town!",
              },
            ],
          },
          {
            id: "HAIRTECHNB06",
            name: "Natural Bliss",
            label: "Hair Care Specialist",
            serviceArea: ["Surulere", "Ikeja"],
            clientsServed: 40,
            rating: 4.7,
            reviewsCount: 35,
            languages: ["English"],
            availability: [
              { day: "Tuesday", time: "9:00 AM - 3:00 PM", type: "Full Day" },
              { day: "Saturday", time: "10:00 AM - 4:00 PM", type: "Full Day" },
            ],
            specialty: "Natural Hair Treatment",
            gallery: [
              {
                imgUrl: "/categories/hair-stylists/two.svg",
                label: "Natural Curls",
              },
              {
                imgUrl: "/categories/hair-stylists/two.svg",
                label: "Twist Out Styles",
              },
              {
                imgUrl: "/categories/hair-stylists/two.svg",
                label: "Hair Spa Treatment",
              },
            ],
            custRequests: ["Custom Natural Treatments", "Protective Styling"],
            fixedBookings: [
              {
                approxDuration: "2 hours",
                fixedPrice: 200,
                description: "Deep Conditioning Treatment",
              },
              {
                approxDuration: "1.5 hours",
                fixedPrice: 120,
                description: "Twist-Out Styling",
              },
            ],
            reviews: [
              {
                reviewerName: "Emily Rose",
                reviewDate: "2025-01-03",
                message: "My curls have never looked better!",
              },
              {
                reviewerName: "Sarah Johnson",
                reviewDate: "2025-01-04",
                message: "Highly recommend their natural hair care services.",
              },
            ],
          },
          {
            id: "HAIRTECHGP07",
            name: "Glam Pro",
            label: "Luxury Hair Stylist",
            serviceArea: ["Yaba", "Ikoyi"],
            clientsServed: 60,
            rating: 4.9,
            reviewsCount: 50,
            languages: ["English", "French"],
            availability: [
              {
                day: "Wednesday",
                time: "10:00 AM - 6:00 PM",
                type: "Full Day",
              },
              { day: "Sunday", time: "12:00 PM - 4:00 PM", type: "Half Day" },
            ],
            specialty: "Luxury Styling and Treatments",
            gallery: [
              {
                imgUrl: "/categories/hair-stylists/three.svg",
                label: "High-End Styling",
              },
              {
                imgUrl: "/categories/hair-stylists/three.svg",
                label: "Event Glam",
              },
              {
                imgUrl: "/categories/hair-stylists/three.svg",
                label: "Sleek Straight Styles",
              },
            ],
            custRequests: ["Custom Luxury Styling", "Wedding Packages"],
            fixedBookings: [
              {
                approxDuration: "3 hours",
                fixedPrice: 400,
                description: "Event Glam Package",
              },
              {
                approxDuration: "2 hours",
                fixedPrice: 250,
                description: "Luxury Hair Treatment",
              },
            ],
            reviews: [
              {
                reviewerName: "Victoria Grant",
                reviewDate: "2025-01-02",
                message: "The best luxury stylist I've ever had!",
              },
              {
                reviewerName: "Daniel Moore",
                reviewDate: "2025-01-05",
                message: "Highly professional and excellent service!",
              },
            ],
          },
        ],
      },
      {
        branchName: "Nail Tech",
        providers: [
          {
            id: "NAILTECHLB01",
            name: "Luxury Nails by Bella",
            label: "Top Nail Artist",
            serviceArea: ["Lekki", "Victoria Island"],
            clientsServed: 40,
            rating: 4.9,
            reviewsCount: 30,
            languages: ["English", "Igbo"],
            availability: [
              { day: "Tuesday", time: "9:00 AM - 5:00 PM", type: "Full Day" },
              { day: "Saturday", time: "10:00 AM - 4:00 PM", type: "Full Day" },
            ],
            specialty: "Luxury Nail Art",
            gallery: [
              {
                imgUrl: "/categories/nailtech-providers/one.svg",
                label: "Intricate Nail Art",
              },
              {
                imgUrl: "/categories/nailtech-providers/one.svg",
                label: "Classic Manicure",
              },
              {
                imgUrl: "/categories/nailtech-providers/one.svg",
                label: "French Tips",
              },
            ],
            custRequests: ["Custom Nail Designs", "Gel Polish"],
            fixedBookings: [
              {
                approxDuration: "1 hour",
                fixedPrice: 50,
                description: "Classic Manicure",
              },
              {
                approxDuration: "1.5 hours",
                fixedPrice: 80,
                description: "Custom Nail Art",
              },
            ],
            reviews: [
              {
                reviewerName: "Sophia Adams",
                reviewDate: "2025-01-01",
                message:
                  "Bella did an amazing job with my nails. Highly recommend!",
              },
              {
                reviewerName: "Mark Johnson",
                reviewDate: "2025-01-03",
                message: "Professional and friendly service. Love the results!",
              },
            ],
          },
          {
            id: "NAILTECHDB02",
            name: "Diva Nails by Diane",
            label: "Experienced Nail Tech",
            serviceArea: ["Ajah", "Surulere"],
            clientsServed: 25,
            rating: 4.7,
            reviewsCount: 20,
            languages: ["English", "Hausa"],
            availability: [
              { day: "Monday", time: "8:00 AM - 3:00 PM", type: "Full Day" },
              { day: "Thursday", time: "1:00 PM - 6:00 PM", type: "Half Day" },
            ],
            specialty: "Gel Extensions",
            gallery: [
              {
                imgUrl: "/categories/nailtech-providers/two.svg",
                label: "Gel Extension Designs",
              },
              {
                imgUrl: "/categories/nailtech-providers/two.svg",
                label: "Elegant Nails",
              },
              {
                imgUrl: "/categories/nailtech-providers/two.svg",
                label: "Wedding Nails",
              },
            ],
            custRequests: ["Nail Extensions", "Custom Nail Art"],
            fixedBookings: [
              {
                approxDuration: "1.5 hours",
                fixedPrice: 100,
                description: "Gel Extensions",
              },
              {
                approxDuration: "2 hours",
                fixedPrice: 150,
                description: "Custom Nail Art for Weddings",
              },
            ],
            reviews: [
              {
                reviewerName: "Emily Brown",
                reviewDate: "2025-01-05",
                message:
                  "Diane's gel extensions are flawless! Love the precision.",
              },
              {
                reviewerName: "James Cooper",
                reviewDate: "2025-01-07",
                message:
                  "Great service and attention to detail. Highly recommend.",
              },
            ],
          },
          {
            id: "NAILTECHPS03",
            name: "Perfect Shine Nails",
            label: "Expert Nail Artist",
            serviceArea: ["Yaba", "Ikeja"],
            clientsServed: 35,
            rating: 4.8,
            reviewsCount: 25,
            languages: ["English", "Yoruba"],
            availability: [
              { day: "Wednesday", time: "9:00 AM - 5:00 PM", type: "Full Day" },
              { day: "Friday", time: "10:00 AM - 2:00 PM", type: "Half Day" },
            ],
            specialty: "Natural Nail Care",
            gallery: [
              {
                imgUrl: "/categories/nailtech-providers/three.svg",
                label: "Natural Nail Polishing",
              },
              {
                imgUrl: "/categories/nailtech-providers/three.svg",
                label: "Subtle Nail Art",
              },
              {
                imgUrl: "/categories/nailtech-providers/three.svg",
                label: "Classic Nail Care",
              },
            ],
            custRequests: ["Natural Nail Treatments", "Elegant Nail Art"],
            fixedBookings: [
              {
                approxDuration: "1 hour",
                fixedPrice: 60,
                description: "Natural Nail Polishing",
              },
              {
                approxDuration: "1.5 hours",
                fixedPrice: 90,
                description: "Elegant Nail Art",
              },
            ],
            reviews: [
              {
                reviewerName: "Grace Lin",
                reviewDate: "2025-01-10",
                message:
                  "Perfect Shine Nails provides excellent nail care services!",
              },
              {
                reviewerName: "Daniel King",
                reviewDate: "2025-01-12",
                message:
                  "Highly professional and clean. Will definitely return.",
              },
            ],
          },
        ],
      },

      // Add similar updates for Nail Tech, Skincare Specialist branches, and other categories...
    ],
  },
  {
    category: "Food & Baking",
    branches: [
      {
        branchName: "Private Chef",
        providers: [
          {
            id: "CHEFCA08",
            name: "Chef Andrew",
            label: "Top Private Chef",
            serviceArea: ["Lekki", "Victoria Island"],
            clientsServed: 20,
            rating: 4.9,
            reviewsCount: 15,
            languages: ["English", "Igbo"],
            availability: [
              {
                day: "Wednesday",
                time: "12:00 PM - 8:00 PM",
                type: "Full Day",
              },
              { day: "Saturday", time: "10:00 AM - 2:00 PM", type: "Half Day" },
            ],
            specialty: "Fine Dining",
            gallery: [
              {
                imgUrl: "/categories/private-chef/one.svg",
                label: "Signature Dish 1",
              },
              {
                imgUrl: "/categories/private-chef/one.svg",
                label: "Signature Dish 2",
              },
              {
                imgUrl: "/categories/private-chef/one.svg",
                label: "Event Catering",
              },
            ],
            custRequests: ["Custom Menu Planning", "Cooking Classes"],
            fixedBookings: [
              {
                approxDuration: "4 hours",
                fixedPrice: 500,
                description: "Private Dinner for Two",
              },
              {
                approxDuration: "8 hours",
                fixedPrice: 1000,
                description: "Event Catering Package",
              },
            ],
            reviews: [
              {
                reviewerName: "Michael Scott",
                reviewDate: "2025-01-01",
                message:
                  "Chef Andrew prepared an amazing dinner for my family!",
              },
              {
                reviewerName: "Pam Beesly",
                reviewDate: "2025-01-03",
                message: "Highly skilled and professional chef.",
              },
            ],
          },
          // Add similar fields for remaining providers in Private Chef branch...
        ],
      },
      // Add similar updates for Event Catering Services, Bakers, Cooking Instructors branches...
    ],
  },
];

export { data };
