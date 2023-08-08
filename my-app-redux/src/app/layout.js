import { Providers } from '../lib/providers';
import './styles/globals.css';

export default function RootLayout(props) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <main>{props.children}</main>
        </body>
      </html>
    </Providers>
  );
}
