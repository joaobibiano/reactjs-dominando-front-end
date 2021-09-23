export interface IFuel {
  id: number;
  name: string;
  price: number;
}

export type IFuelState = IFuel & {
  updated: boolean;
};

export type FuelComponentProps = {
  editMode: boolean;
  toggleEditMode: () => void;
};
