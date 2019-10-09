import { StyledProps } from 'styled-components';

export interface HashMap<T> { [key: string]: T }

export type AnyObj = { [key: string]: any };

export type Stylable = StyledProps<{
  className?: string;
  children?: any[];
}>;

