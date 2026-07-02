export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 px-4 md:px-16 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start">
        
        {/* ഇടതുഭാഗം */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold">ZONEX EDUHUB</h2>
          <p className="text-gray-400 text-sm mt-1">Empowering your trading journey.</p>
        </div>

        {/* വലതുഭാഗം - നിങ്ങൾ ആവശ്യപ്പെട്ട പാഡിംഗ് ക്രമീകരണം */}
        <div className="flex flex-col items-end gap-1 text-gray-300 text-sm">
          <p>zonexeduhub@gmail.com</p>
          <p>+91 70345 02024</p>
          <p>Palarivattom, Kochi</p>
          
          <div className="mt-4">
            <p className="text-white/50 text-xs">
              &copy; 2026 Zonex EduHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}