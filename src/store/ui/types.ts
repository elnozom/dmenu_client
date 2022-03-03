import { snackBarModel } from '@/utils/snackbar.model';
export interface UiState {
  loading: boolean;
  guestModal: boolean;
  snackBar: snackBarModel;
}
