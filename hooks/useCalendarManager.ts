// hooks/useCalendarManager.ts
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Event, KeyLog } from '@/lib/types';
import { generateRandomKeyStatus } from '@/lib/utils';

export const useCalendarManager = () => {
  const [keyLogs, setKeyLogs] = useState<KeyLog>({});
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [modalState, setModalState] = useState({
    showAdd: false,
    showDelete: false,
    showKey: false,
  });
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    title: '', start: '', allDay: false, id: 0
  });

  // --- データフェッチング (Supabase連携を想定) ---
  useEffect(() => {
    const fetchEvents = async () => {
      // setLoading(true);
      // const { data, error } = await supabase.from('events').select('*');
      // if (data) setAllEvents(data);
      // setLoading(false);
      console.log("将来的にここでSupabaseからデータを取得します");
    };
    fetchEvents();
  }, []);

  // --- モーダル制御 ---
  const openModal = (type: 'add' | 'delete' | 'key') => setModalState(prev => ({ ...prev, [`show${type.charAt(0).toUpperCase() + type.slice(1)}`]: true }));
  const closeModal = () => setModalState({ showAdd: false, showDelete: false, showKey: false });

  // --- イベントハンドラ ---
  const handleDateClick = useCallback((arg: { date: Date }) => {
    const dateStr = arg.date.toISOString().split("T")[0];
    setKeyLogs(prev => {
      if (!prev[dateStr]) {
        return { ...prev, [dateStr]: generateRandomKeyStatus() };
      }
      return prev;
    });
    setSelectedDate(dateStr);
    openModal('key');
  }, []);

  const handleAddEventClick = useCallback(() => {
    setNewEvent({ start: new Date(), allDay: true, id: new Date().getTime(), title: '' });
    openModal('add');
  }, []);

  const handleDeleteModal = useCallback((data: { event: { id: string } }) => {
    setIdToDelete(Number(data.event.id));
    openModal('delete');
  }, []);

  const handleDelete = async () => {
    if (!idToDelete) return;
    // --- Supabase連携 ---
    // const { error } = await supabase.from('events').delete().match({ id: idToDelete });
    // if (!error) {
    setAllEvents(allEvents.filter(event => event.id !== idToDelete));
    // }
    closeModal();
    setIdToDelete(null);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // --- Supabase連携 ---
    // const { data, error } = await supabase.from('events').insert(newEvent).select();
    // if (data) {
    setAllEvents([...allEvents, newEvent]);
    // }
    closeModal();
  };

  const handleNewEventChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent(prev => ({ ...prev, title: e.target.value }));
  }, []);

  const updateKeyHolder = useCallback((date: string, keyNumber: number, newHolder: string) => {
    setKeyLogs(prev => {
        const currentLog = prev[date] || [];
        const newLog = currentLog.map(k => k.number === keyNumber ? { ...k, holder: newHolder } : k);
        return { ...prev, [date]: newLog };
    });
  }, []);

  return {
    states: { keyLogs, allEvents, modalState, selectedDate, newEvent },
    handlers: {
      closeModal,
      handleDateClick,
      handleAddEventClick,
      handleDeleteModal,
      handleDelete,
      handleSubmit,
      handleNewEventChange,
      updateKeyHolder,
    },
  };
};