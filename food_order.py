def show_menu():
    print("🍔 Welcome to Jenan's Burger")
    print("Menu:")
    print("1. Jenan's Cheeseburger - $7.99")
    print("2. Jenan's Animal Fries - $6.00 ")
    print("3. Jenan's Vanila Coke - $2.99")
    print("4. Jenan's Combo Meal - $19.99")
    print("5. Jenan's Chicken Burger - $8.99")
    print("6. Jenan's Veggie Burger - $6.99")   
    print("7. Jenan's Spicy Chicken Burger - $9.99")
    print("8. Jenan's Fish and Shells Burger - $8.49")
    print("9. Jenan's Chicken Fries - $5.99")
    print("10. Jenan's Onion Rings - $4.49")
    print("11. Jenan's Cranberry Milkshake - $3.99")
    print("12. Jenan's Coleslaw - $5.49")
    print("13. Jenan's BlueCheese Macaroni - $4.99")
    print("14. Jenan's Chocolate Milkshake - $3.49")
    print("15. Jenan's Strawberry Milkshake - $3.49")
    print("16. Checkout (5)")

def get_price(item_number):
    prices = {1: 7.99,: 6.00,: 2.99, 4: 19.99, 5: 8.99,6: 6.99, 7: 9.99, 8: 8.49, 9: 5.99,: 4.49, 11: 3.99, 12: 5.49, 13: 4.99, 14: 3.49, 15: 3.49}
    return prices.get(item_number, 0)

def food_order():
    order = []
    total = 0

    while True:
        show_menu()
        try:
            choice = int(input("Enter item number to order (or 5 to checkout): "))
        except ValueError:
            print("Please enter a valid number.")
            continue

        if choice == 5:
            break
        elif choice in [1, 2, 3, 4]:
            quantity = int(input("Enter quantity: "))
            price = get_price(choice) * quantity
            order.append((choice, quantity, price))
            total += price
            print(f"Added to order. Current total: ${total}")
        else:
            print("Invalid choice. Please select a valid item number.")

    print("\nYour Order Summary:")
    items = {1: "Burger",2: "Fries", 3: "Vanila Coke", 4: "Combo Meal", 5: "Chicken Burger", 6: "Veggie Burger", 7: "Spicy Chicken Burger", 8: "Fish and Shells Burger", 9: "Chicken Fries", 10: "Onion Rings", 11: "Cranberry Milkshake", 12: "Coleslaw", 13: "BlueCheese Macaroni", 14: "Chocolate Milkshake", 15: "Strawberry Milkshake"}
    print("Items ordered:")
    for item_num, qty, price in order:
        print(f"{items[item_num]} x{qty} - ${price}")
    print(f"Total: ${total}")
    print("Thank you for your order! 🍽️")

# Run the food order system
if __name__ == "__main__":
    food_order()
