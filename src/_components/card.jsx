export function CardComponent({ gambar, deskripsi, judul }) {
  return (
    <div className="max-w-sm bg-neutral-200/50 rounded-xl p-2.5">
      <div className="flex items-center justify-center">
        <img src={gambar} alt="Gambar" className="size-60" />
      </div>
      <div className="p-2">
        <h1 className="font-bold text-xl text-neutral-900">{judul}</h1>
        <p className="text-lg text-neutral-600 text-neutral-500">{deskripsi}</p>
      </div>
    </div>
  );
}
