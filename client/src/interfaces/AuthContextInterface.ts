interface AuthContextInterface {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { AuthContextInterface };
