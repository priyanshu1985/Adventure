# Adventure Activities Structure

This directory contains all adventure activity booking pages organized by category.

## Directory Structure

```
activities/
├── water-sports/
│   ├── ScubaDiving.jsx
│   ├── Surfing.jsx
│   ├── Kayaking.jsx
│   ├── WhiteWaterRafting.jsx
│   └── index.js
├── mountain-activities/
│   ├── MountainTrekking.jsx
│   ├── RockClimbing.jsx
│   ├── Skiing.jsx
│   ├── Paragliding.jsx
│   └── index.js
├── camping-activities/
│   ├── WildCamping.jsx
│   ├── BeachCamping.jsx
│   ├── ForestCamping.jsx
│   ├── DesertCamping.jsx
│   └── index.js
└── Booking.jsx (Generic booking wrapper)
```

## Available Routes

### Water Sports

- `/activities/scuba-diving` - Scuba Diving Adventure (3 Days, $899)
- `/activities/surfing` - Surfing Experience (5 Days, $699)
- `/activities/kayaking` - Sea Kayaking Expedition (4 Days, $549)
- `/activities/white-water-rafting` - White Water Rafting (2 Days, $449)

### Mountain Activities

- `/activities/mountain-trekking` - Mountain Trekking Expedition (7 Days, $1299)
- `/activities/rock-climbing` - Rock Climbing Adventure (4 Days, $799)
- `/activities/skiing` - Alpine Skiing Experience (6 Days, $1499)
- `/activities/paragliding` - Paragliding Experience (3 Days, $649)

### Camping Activities

- `/activities/wild-camping` - Wild Camping Expedition (5 Days, $599)
- `/activities/beach-camping` - Beach Camping Adventure (4 Days, $449)
- `/activities/forest-camping` - Forest Camping Experience (4 Days, $499)
- `/activities/desert-camping` - Desert Camping Expedition (3 Days, $549)

## Activity Data Structure

Each activity includes:

- **name**: Activity title
- **images**: Array of 4 images
- **duration**: Trip duration
- **difficulty**: Easy/Medium/Hard
- **basePrice**: Base price in USD
- **locations**: Array of available locations
- **history**: Detailed description and background
- **highlights**: Array of key features
- **included**: Array of what's included in the price
- **notIncluded**: Array of what's not included

## Components Used

Each activity page uses:

- `Header` - Navigation header
- `BookingLayout` - Production-level booking component with:
  - Image gallery with thumbnails
  - Tabbed interface (Overview, What's Included, Locations)
  - Booking form with validation
  - Dynamic pricing with service fee calculation
  - Trust indicators
- `Footer` - Page footer

## Styling

All activities share the production-level styles from:

- `/styles/Booking.css`

This includes:

- Responsive design
- Image gallery with hover effects
- Custom tabs
- Form styling with focus states
- Price summary box
- Trust indicators
- Mobile-optimized layouts

## Adding New Activities

To add a new activity:

1. Create a new `.jsx` file in the appropriate category folder
2. Copy the structure from an existing activity
3. Update the `activityData` object with new details
4. Add the route to `/navigation/AppNavigator.jsx`
5. Export the component in the category's `index.js`

Example:

```jsx
import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const NewActivity = () => {
  const activityData = {
    name: "Activity Name",
    images: ["url1", "url2", "url3", "url4"],
    duration: "X Days",
    difficulty: "Easy/Medium/Hard",
    basePrice: 999,
    locations: ["Location 1", "Location 2"],
    history: "Activity description...",
    highlights: ["Highlight 1", "Highlight 2"],
    included: ["Item 1", "Item 2"],
    notIncluded: ["Item 1", "Item 2"],
  };

  return (
    <>
      <Header />
      <BookingLayout activity={activityData} />
      <Footer />
    </>
  );
};

export default NewActivity;
```

## Notes

- All prices are base prices, automatically calculated with 10% service fee
- Each activity supports multiple locations via dropdown selector
- Booking form includes validation for all required fields
- Images are sourced from Unsplash
- All activities are mobile-responsive
