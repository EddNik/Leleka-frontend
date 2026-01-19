export interface OnboardingFormValues {
  avatar: File | null;
  dueDate: string;
  gender: 'male' | 'female' | 'neutral';
}

export interface OnboardingResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    gender: string;
    theme: string;
    dueDate: string;
  };
}