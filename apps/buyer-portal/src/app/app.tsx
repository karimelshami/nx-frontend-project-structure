// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { buyerPortalPageLogin } from '@buyer-portal/pages/login';
import { buyerPortalPageInvoiceList } from '@buyer-portal/pages/invoice-list';
import { buyerPortalPageInvoiceDetails } from '@buyer-portal/pages/invoice-details';
import * from '@buyer-portal/data-access/auth'
import * from '@buyer-portal/ui/ui-components'
import * from '@buyer-portal/ui/ui-tokens'

export function App() {
  return (
    <>
      <NxWelcome title="buyer-portal" />
      <div />
    </>
  );
}

export default App;
