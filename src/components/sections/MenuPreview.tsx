'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { menuCategories, type MenuCategory } from '@/data/content'

export function MenuPreview() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id)

  const activeCategory = menuCategories.find((c) => c.id === activeTab) ?? menuCategories[0]

  return (
    <section className="section-padding bg-muted/50" id="menu">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From traditional starters to indulgent desserts — explore our carefully crafted menu
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-1 pb-2 mb-8 scrollbar-none justify-start md:justify-center">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                'px-4 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200',
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-foreground/70 hover:bg-muted border border-border'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {activeCategory.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-primary font-semibold text-sm whitespace-nowrap mt-1">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Prices in UGX. All dishes prepared fresh. Vegetarian options available for most dishes.
          </p>
        </div>
      </div>
    </section>
  )
}
