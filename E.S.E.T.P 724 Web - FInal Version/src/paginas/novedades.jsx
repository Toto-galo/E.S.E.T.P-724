<div className="documentos-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {documentos.map((doc) => (
    <div key={doc.id} className="bg-white rounded-lg shadow flex flex-col justify-between h-full p-6">
      <div>
        <h4 className="font-bold text-lg mb-2">{doc.titulo}</h4>
        <p className="text-gray-600 mb-4">{doc.descripcion}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-gray-500">{doc.fecha}</span>
        <a
          href={doc.url}
          download
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          <i className="fa fa-download mr-2"></i> Descargar
        </a>
      </div>
    </div>
  ))}
</div>