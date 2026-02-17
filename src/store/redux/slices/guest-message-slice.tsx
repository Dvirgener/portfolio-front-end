import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** 1) Types */
export type GuestMessageInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type Message = {
  id?: string | number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

export type MessageState = {
  messages: Message[];
  message: Partial<Message>;
  loading: boolean;
  error: string | null;
};

const initialState: MessageState = {
  messages: [],
  message: {},
  loading: false,
  error: null,
};


export const saveMessageAsync = createAsyncThunk<
  // Return type of payload in fulfilled
  Message,
  // Argument type passed to thunk
  GuestMessageInput,
  // thunkAPI types
  { rejectValue: string }
>("guest_message/saveMessageAsync", async (data, thunkAPI) => {
  try {
    const res = await fetch("http://portfolio-backend-api.test/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      // If backend returns JSON error, you can parse it here
      return thunkAPI.rejectWithValue("Failed to Send Message.");
    }

    const json = (await res.json()) as Message;
    return json;
  } catch {
    return thunkAPI.rejectWithValue("Failed to Send Message.");
  }
});

/** 3) Slice */
const messageSlice = createSlice({
  name: "guest_message",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveMessageAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveMessageAsync.fulfilled, (state, action: PayloadAction<Message>) => {
        state.loading = false;
        state.message = action.payload;
        state.messages.unshift(action.payload);
      })
      .addCase(saveMessageAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? "Something went wrong";
      });
  },
});

export const message_actions = messageSlice.actions;
export default messageSlice.reducer;
