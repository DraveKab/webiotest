import { YouTubeHomePage } from '../pages/youtube.page';
import { YouTubePlayerPage } from '../pages/youtube.player.page';

const yt = new YouTubeHomePage();
const ytp = new YouTubePlayerPage();

describe('🎵 YouTube: ผู้ใช้ค้นหาเพลงและควบคุมการเล่นวิดีโอ', () => {

  it('it should search a song', async () => {
    await yt.clickSearchIcon(); // ผู้ใช้กดไอคอนค้นหา
    await yt.typeInSearchInput('4eve situationship'); // พิมพ์ชื่อเพลง
    await yt.clickFirstKeywordResult(); // เลือกคำแนะนำอันแรก
  });

  it('should open the first video result', async () => {
    await yt.clickFirstVideoThumbnail(); // คลิกวิดีโอแรก
    await ytp.skipButtonToBeDisplayed(); // ข้ามโฆษณาหากมี
    await ytp.waitScreenToBeDisplayed(); // รอให้หน้าจอวิดีโอโหลด
    await ytp.clickVideoScreen(); // แตะหน้าจอเพื่อแสดงปุ่มควบคุม
    await ytp.waitPauseButtonToBeDisplayed(); // รอปุ่ม pause ปรากฏ
    await ytp.verifyPauseButtonVisible(); // ยืนยันว่า video เล่นอยู่
  });

  it('should pause and resume the video', async () => {
    await ytp.pauseVideo(); // ผู้ใช้กด pause
    await ytp.verifyPlayButtonVisible(); // ยืนยันว่า video หยุดแล้ว
    await ytp.playVideo(); // ผู้ใช้กดเล่นต่อ
    await ytp.verifyPauseButtonVisible(); // ยืนยันว่า video กำลังเล่นอีกครั้ง
  });
  
  it('should verify that video timestamp is progressing', async () => {
    await ytp.clickVideoScreen();
    await ytp.waitForTimestampToChange();
  });

});
