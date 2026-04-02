# School Canteen App

### A simple React app to manage student food and orders. You can create student, place food order and track total spending.

## Setup instruction

### 1. Clone the Project

``` 
git clone <my-repo-link>
cd SchoolCanteen
```

### 2. Install Dependency

```
npm install
```

### 3 Start project 

```
npm run start
```


### 4. open in Browser
```
localhost:1234
```

## Packages
```
npm init -y
npm install parcel
npm install react
npm install react-dom
npm install tailwindcss @tailwindcss/postcss
npm install react-router-dom
```

## Library used

- React: UI Building
- React Router DOM: Routing between pages
- Parcel: bundler
- Tailwind CSS: styling



## Features

- Create student with referral code
- Store data using *localStorage*
- Place snack orders (select student + quantity)
- Track *total spend per student*
- View detailed student order history

## Mock Data Approach
 
Dummy json -> Recipies    
```
https://dummyjson.com/recipes    
```                            
 Since API doesn’t provide price:

- Price is calculated using:
  
  price = caloriesPerServing / 2
  

* Students & Orders:
  - Stored in *localStorage*  

 ## Data Flow

1. Create Student → saved in localStorage
2. Place Order → linked using student id
3. Student Page → calculates total spend
4. Student Details → shows order history

##  Author

Bhakti Agrawal