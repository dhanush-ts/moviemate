export const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-slate-50 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <a href="https://flowbite.com/" className="hover:underline">MovieMate</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/" className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/" className="hover:underline me-4 md:me-6">Twitter</a>
            </li>
            <li>
                <a rel="noopener noreferrer" target="_blank" href="https://youtube.com/" className="hover:underline">YouTube</a>
            </li>
        </ul>
    </footer>
)
}
