export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-red-500">404</h1>
            <p className="mt-3 text-lg">Page Not Found</p>

            <a href="/" className="btn btn-primary mt-4">
                Go Home
            </a>
        </div>
    );
}