import './styles/globals.css';

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <main>{props.children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Settlements',
};
