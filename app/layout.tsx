import '../styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head></head>
			<body>
				<div className='p-4'>{children}</div>
			</body>
		</html>
	);
}
