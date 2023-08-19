import { TabletIcon, TabletTemplateIsi } from '../../../element/tablet/isi'

export function PpsmbFakultas() {
  const data = [
    {
      id: 'metamorphoself',
      nama: 'Metamorphoself',
      fakultas: 'Fakultas Biologi',
    },
    {
      id: 'simfoni',
      nama: 'Simfoni',
      fakultas: 'Fakultas Ekononika dan Bisnis',
    },
    {
      id: 'papyrus',
      nama: 'Papyrus',
      fakultas: 'Fakultas Farmasi',
    },
    {
      id: 'dialektika',
      nama: 'Dialektika',
      fakultas: 'Fakultas Filsafat',
    },
    {
      id: 'geospace',
      nama: 'Geospace',
      fakultas: 'Fakultas Geografi',
    },
    {
      id: 'justicia',
      nama: 'Justicia',
      fakultas: 'Fakultas Hukum',
    },
    {
      id: 'kampung-budaya',
      nama: 'Kampung Budaya',
      fakultas: 'Fakultas Ilmu Budaya',
    },
    {
      id: 'society',
      nama: 'Society',
      fakultas: 'Fakultas Ilmu Sosial dan Politik',
    },
    {
      id: 'identistry',
      nama: 'I-dentistry',
      fakultas: 'Fakultas Kedokteran Gigi',
    },
    {
      id: 'vetebrae',
      nama: 'Vetebrae',
      fakultas: 'Fakultas Kedokteran Hewan',
    },
    {
      id: 'pionir-morfogenesis',
      nama: 'Pionir Morfogenesis',
      fakultas: 'Fakultas Kedokteran Kesehatan Masyarakat dan Keperawatan',
    },
    {
      id: 'pelestari',
      nama: 'Pelestari',
      fakultas: 'Fakultas Kehutanan',
    },
    {
      id: 'pascal',
      nama: 'Pascal',
      fakultas: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    },
    {
      id: 'organik',
      nama: 'Organik',
      fakultas: 'Fakultas Pertanian',
    },
    {
      id: 'pionir-rancher',
      nama: 'Pionir Rancher',
      fakultas: 'Fakultas Peternakan',
    },
    {
      id: 'prk',
      nama: 'Psikologi Rumah Kita',
      fakultas: 'Fakultas Psikologi',
    },
    {
      id: 'kesatria',
      nama: 'Kesatria',
      fakultas: 'Fakultas Teknik',
    },
    {
      id: 'agrophoria',
      nama: 'Agrophoria',
      fakultas: 'Fakultas Teknologi Pertanian',
    },
    {
      id: 'permadani',
      nama: 'Permadani',
      fakultas: 'Sekolah Vokasi',
    },
  ]
  return (
    <TabletTemplateIsi
      title="PPSMB Fakultas"
      subtitle="Rabu-Kamis, 2-3 Agustus 2023"
      titleContent="PPSMB Fakultas/Sekolah merupakan rangkaian kegiatan orientasi dan pengenalan lingkungan
          kampus tingkat fakultas dengan anggota yang terdiri dari mahasiswa fakultas tersebut.
          PPSMB Fakultas/Sekolah bertujuan mengajak mahasiswa untuk lebih mengenal sejarah,
          filosofi, nilai-nilai, visi, dan misi. Rangkaian kegiatan ini juga berfokus pada
          pengenalan kompetensi dan pengembangan diri mahasiswa terkait keilmuan setiap
          Fakultas/Sekolah."
      color="Pink"
      hrefKembali="/kegiatan/agenda"
      titleScrollable
    >
      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 lg:gap-[30px]">
        {data.map(({ id, nama, fakultas }) => {
          return (
            <TabletIcon
              key={nama}
              title={nama}
              subtitle={fakultas}
              href={`/kegiatan/ppsmb-fakultas/${id}`}
              image={`/assets/PPSMBFakultas/${id}.png`}
              color="Hijau"
            />
          )
        })}
      </div>
    </TabletTemplateIsi>
  )
}

export default PpsmbFakultas
