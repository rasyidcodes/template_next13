import { TabletIcon } from '@/components/element/tablet/isi'
import React from 'react'

export function OlahragaList() {

    const data = [
       
        {
          id: 'sepakbola',
          nama: 'Sepakbola',
          fakultas: 'Fakultas Ekononika dan Bisnis',
        },
        {
          id: 'bulutangkis',
          nama: 'Bulutangkis',
          fakultas: 'Fakultas Biologi',
        },
        {
          id: 'bulutangkis',
          nama: 'Bulutangkis',
          fakultas: 'Fakultas Biologi',
        },
        {
          id: 'bulutangkis',
          nama: 'Bulutangkis',
          fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
        {
            id: 'bulutangkis',
            nama: 'Bulutangkis',
            fakultas: 'Fakultas Biologi',
        },
      ]

  return (
    <div className=" p-5 pt-20 grid grid-cols-2 gap-[10px] md:grid-cols-4 lg:gap-[30px]">
        {data.map(({ id, nama, fakultas }) => {
          return (
            <TabletIcon
              key={nama}
              title={nama}
              subtitle={fakultas}
              href={`/cabor/olahraga/${id}`}
              image={`/assets/PPSMBFakultas/${id}.png`}
              color="Hijau"
            />
          )
        })}
      </div>
  )
}
