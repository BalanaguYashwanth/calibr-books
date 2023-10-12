export interface BookProps {
  title: string;
  _source?: {
    title: string;
  };
}

export interface PaginationProps {
  prev: () => void;
  next: () => void;
  prevValue?: number;
  nextValue?: number;
}

export interface SearchBarProps {
  onInputChange: (text: string) => Promise<void>;
}

export interface RootLayoutProps{
  children: React.ReactNode
}