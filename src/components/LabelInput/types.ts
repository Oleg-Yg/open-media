export interface LabelInputProps {
  value: string;
  setValue: (value: string) => void;
  isError?: boolean;
  onClickSend: () => void;
  errorMassage?: string;
}
