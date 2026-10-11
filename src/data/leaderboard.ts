export interface LeaderboardStudent {
  id: string;
  name: string;
  percent: number;
}

export const leaderboardStudents: LeaderboardStudent[] = [
  { id: "s1", name: "Sara Mansour", percent: 96 },
  { id: "s2", name: "Omar Khaled", percent: 88 },
  { id: "s3", name: "Lina Adel", percent: 74 },
  { id: "s4", name: "Youssef Hany", percent: 61 },
  { id: "s5", name: "Nour Samir", percent: 47 },
  { id: "s6", name: "Karim Tarek", percent: 30 },
];

export const leaderboardMessages: string[] = [
  "عظيم يا صديقي.. أداءك في الكورس ده أفضل من {percent} من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا",
  "برافو عليك يا صديقي.. إنت ماشي في الكورس ده أحسن من {percent} من الطلبة.. كمّل وهتلاقي اسمك هنا قريب",
  "شغل جامد يا صديقي.. تقدمك في الكورس ده سابق {percent} من باقي الطلبة.. متوقفش دلوقتي، مكانك في الليدر بورد مستنيك",
  "كمّل يا بطل.. أداءك في الكورس ده أحسن من {percent} من زمايلك.. شوية كمان وهتشوف اسمك هنا",
];

export const leaderboardStartMessage =
  "ابدأ الكورس يا صديقي.. ومع أول خطوة هتشوف نفسك في الليدر بورد هنا";

export const leaderboardCatchUpMessage =
  "كمّل يا صديقي.. إنت لسه في الأول بس كل خطوة بتقرّبك.. عايز أشوف اسمك في الليدر بورد هنا";
