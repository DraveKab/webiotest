import { YouTubeHomePage } from '../pages/youtube.page';
import { YouTubePlayerPage } from '../pages/youtube.player.page';

const yt = new YouTubeHomePage();
const ytp = new YouTubePlayerPage();

describe('🎵 YouTube: ผู้ใช้ค้นหาเพลงและควบคุมการเล่นวิดีโอ', () => {

  it('ผู้ใช้เปิด YouTube และค้นหาเพลง "4eve situationship"', async () => {
    await yt.clickSearchIcon(); // ผู้ใช้กดไอคอนค้นหา
    await yt.typeInSearchInput('4eve situationship'); // พิมพ์ชื่อเพลง
    await yt.clickFirstKeywordResult(); // เลือกคำแนะนำอันแรก
  });

  it('ระบบเปิดวิดีโอแรกจากผลลัพธ์การค้นหา', async () => {
    await yt.clickFirstVideoThumbnail(); // คลิกวิดีโอแรก
    await ytp.skipButtonToBeDisplayed(); // ข้ามโฆษณาหากมี
    await ytp.screenToBeDisplayed(); // รอให้หน้าจอวิดีโอโหลด
    await ytp.clickVideoScreen(); // แตะหน้าจอเพื่อแสดงปุ่มควบคุม
    await ytp.waitPauseButtonToBeDisplayed(); // รอปุ่ม pause ปรากฏ
    await ytp.verifyPauseButtonVisible(); // ยืนยันว่า video เล่นอยู่
  });

  it('ผู้ใช้กดหยุดวิดีโอ แล้วเล่นต่ออีกครั้ง', async () => {
    await ytp.pauseVideo(); // ผู้ใช้กด pause
    await ytp.verifyPlayButtonVisible(); // ยืนยันว่า video หยุดแล้ว

    await ytp.playVideo(); // ผู้ใช้กดเล่นต่อ
    await ytp.verifyPauseButtonVisible(); // ยืนยันว่า video กำลังเล่นอีกครั้ง
  });

});
