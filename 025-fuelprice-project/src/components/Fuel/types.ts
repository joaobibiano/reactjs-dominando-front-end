export interface IFuel {
  id: number;
  name: string;
  price: number;
}

export type FuelComponentProps = {
  editMode: boolean;
  toggleEditMode: () => void;
};
