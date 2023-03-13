import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ClassSliceType {
  value: string[];
}

const initialState: ClassSliceType = { value: [] };

// Think of a slice as creating a a singlular usage of "useState"
// e.g this would be `const [classes, setClasses] = useState([])`
const classesSlice = createSlice({
  name: "classes",
  initialState: initialState,
  reducers: {
    addClass: (state: ClassSliceType, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload]; // action.payload = class that were adding
    },
    removeClass: (state: ClassSliceType, action: PayloadAction<string>) => {
      const newState = state.value.filter((c) => c !== action.payload); // action.payload = class that were removing
      state.value = [...newState];
    },
  },
});

// Export reducers
export const { addClass, removeClass } = classesSlice.actions;

// Export actual value of the redux state
export const classes = (state: RootState) => state.classes.value;
export default classesSlice.reducer;
