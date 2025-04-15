# Expo Redux Starter Template

A modern, type-safe starter template for Expo applications with Redux Toolkit, Redux Saga, and Redux Persist.

## Features

- 🚀 Expo SDK 50
- 🔄 Redux Toolkit for state management
- ⚡ Redux Saga for side effects
- 💾 Redux Persist for state persistence
- 📱 TypeScript support
- 🎨 ESLint with import sorting
- 📦 Axios for API calls
- 🎯 Example counter feature with async operations

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/yourusername/expo-redux-starter.git
cd expo-redux-starter
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn start
# or
npm start
```

## Project Structure

```
├── app/                 # Expo Router app directory
│   ├── _layout.tsx     # Root layout with Redux Provider
│   ├── counter.tsx     # Counter screen example
│   └── modal.tsx       # Modal screen example
├── components/         # Reusable components
│   └── Counter.tsx    # Counter component
├── store/             # Redux store configuration
│   ├── features/      # Feature slices
│   │   └── counter/   # Counter feature
│   ├── hooks.ts       # Typed hooks
│   ├── index.ts       # Store configuration
│   └── saga.ts        # Root saga
└── types/             # TypeScript types
```

## Counter Feature Example

The template includes a complete counter feature that demonstrates:

- State management with Redux Toolkit
- Async operations with Redux Saga
- State persistence
- Type-safe actions and state
- Component integration

### Usage Example

```typescript
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/store/features/counter/slice';
import { selectCounterValue } from '@/store/features/counter/selectors';

function MyComponent() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounterValue);

  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
    </View>
  );
}
```

## Adding New Features

1. Create a new feature directory in `store/features/`
2. Define your types in `types.ts`
3. Create a slice in `slice.ts`
4. Add selectors in `selectors.ts`
5. Create sagas in `saga.ts`
6. Add the feature to the root reducer and root saga

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
