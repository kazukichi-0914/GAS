function main() {
  //�X�v���b�h�V�[�g��key���w�肵�Ď擾
  var spreadsheet = SpreadsheetApp.openById('1YbKiqTPZVs3AzSMw9LNOAm21xHlf7jY_NZQo8iiPW98');
  Logger.log(spreadsheet+"�̓ǂݍ��݂��J�n���܂���")//Spreadsheet
  
  //���ꂩ��GoogleAppsScript��loop���J�n���܂�
  //Number(i)�����������Ă��܂�
  //i�̕ϐ����X�v���b�h�V�[�g�̉��s�ڂ܂ł�ǂݍ��ނ���ݒ肵�܂�
  for(var i  = 169 ; i <= 195; i++){
    
    //���O�ɏo��(�������[�v���ł��Ă��邩�H)
    Logger.log(Math.round(i));
    Logger.log(Number(i));
       
    //�Z��(F,i)��\�����܂��B
    var range = spreadsheet.getRange("F"+Number(i));
    //4. �l���擾����
    var value = range.getValue();
        //�Z��(A,i)��\�����܂��B
    var range2 = spreadsheet.getRange("B"+Number(i));
    //4. �l���擾����
    var value2 = range2.getValue();
        //�Z��(D,i)��\�����܂��B
    var range3 = spreadsheet.getRange("D"+Number(i));
    //4. �l���擾����
    var value3 = range3.getValue();
    Logger.log(value);
    Logger.log(value2);
    Logger.log(value3);
    Logger.log(value+"@mori.co.jp�Ƀ��[���𑗂�܂��i�{�ԃA�h���X�ɑ��M���܂��j");
    
    /* �e�f�[�^������ */
    var strTo = value+"@mori.co.jp"; //To
    var strName ="VPN���p�җl"; //�c��
    var strFrom ="k-ikawa@mori.co.jp"; //From
    var strSender ="johounyo@mori.co.jp"; //���o�l
 
    /* ���[���{�������� */
    var strSubject = "�y�v�񓚁z�Г�����SIM���p���Ԓ����i�񓚊����F2019/6/30�j�y���V�X�e�������z";
    var strBody = "VPN���p�җl(�����F"+value2+"\n"+"�@�@�@�@�@�@�@�A�J�E���g���F"+value+"\n"+"�Г�����SIM�i�g���C�A���j�𗘗p�������Ƃ�������ɑ��t�����Ă���܂��B�Г�����SIM�̎g�p���ɂ��Ĉȉ���URL���J���Ă��񓚂��������B"+"\n\n"+"https://forms.gle/gx4oa9NUG6GaaiKL9"+"\n";
  
  /* ���[���𑗐M */
  GmailApp.sendEmail(
    strTo,
    strSubject,
    strBody,
    {
      from: strFrom,
      name: strSender
    }
  ); //MailApp�ł�from���ݒ�ł��Ȃ��Ƃ̂���
  
  Logger.log("�A�J�E���g�L�������̒ʒm���[���͑S�����M�������܂���")
  Logger.log("�X�v���b�h�V�[�g�̓ǂݎ����J�n���܂�")
  
  //100000m�b�̃X���[�v�����܂� GoogleApps�̘A���N�����Ԃ�5���Ȃ̂�5����211�l�Ƀ��[���𑗂��悤��1400ms��sleep�����܂�
  Utilities.sleep(10000);

  //Gsuite�ł�Gmail���p�̐�������
  //https://support.google.com/a/answer/166852
  //GAS��5���ȏ�̋N���Œ�~����ihttp://direction-note.com/gas-beyond-execution-time/�j
  
  //Google����������ꊇ���M�̃K�C�h���C��
  //�}�[�P�e�B���O �L�����y�[���Ȃǂő�ʂ̃��[���𑗐M����ۂɂ́A���M�����̏���ɒB���Ȃ��悤�Ɏ��̂悤�Ȏ�i����������邱�Ƃ��������߂��܂�

  /*���[���̑��M�� 2 ���ɕ����čs�� - 1 �̈���O���[�v�Ƀ��b�Z�[�W�𑗐M������A24 ���ԑ҂��Ă���ʂ̃O���[�v�ɑ��M���܂��B
  �O���[�v �A�h���X�Ƀ��[���𑗐M���� - 1 �̃O���[�v �A�h���X���g���ĕ����̃��[���A�h���X�Ƀ��[���𑗐M���܂��B���Ƃ��΁A�h���C�����̑S���[�U�[�����[�����O ���X�g�ɒǉ����邱�ƂŁA�g�D���̑S���[�U�[�ɘA���ł��܂��B�ڂ����́A�O���[�v�ƃO���[�v�̃|���V�[�Ɛ������������������B
  Marketplace �̃\�����[�V�������g�p���� - �ꊇ���[�����M�p�̃A�v�����A���܂��܂ȃT�[�h�p�[�e�B �f�x���b�p�[����񋟂���Ă��܂��B�ڂ����́AG Suite Marketplace ���������������B
  ��: Marketplace �̃\�����[�V�����̓T�[�h�p�[�e�B �f�x���b�p�[����ʌ����ɍ쐬�������̂ł��邽�߁AGoogle �ł� Marketplace �A�v���̋Z�p�T�|�[�g��񋟂��Ă��܂���B���炩���߂��������������B�B
  App Engine �\�����[�V�������\�z���� - �f�x���b�p�[�̓J�X�^�� �A�v���P�[�V�������쐬���āA���[���̏�����������グ�邱�Ƃ��ł��܂��B�ڂ����́A���[���̂��߂� App Engine �ɂ��Ẵy�[�W���������������B
  ���[�J���̃��[���T�[�o�[���g�p���� - ���[�J���̃��[���T�[�o�[���������̏ꍇ�́A���̃T�[�o�[���g�p���Ĉ���Ƀ��[���𒼐ڑ��M���邱�Ƃő��M����������ł��܂��B����ɁA���̃��[�J�� �T�[�o�[�� SPF ���R�[�h�ɒǉ����Ă������ƂŁA���[�������f���[���ɕ��ނ����̂�h�����Ƃ��ł��܂��B
  �ꊇ���M�K�C�h���C���Ƃ������߂̕��@���m�F���� - ���[���̎�M�҂���ꊇ���M���[�������f���[���ƕ񍐂���邱�Ƃ����邽�߁A���ׂĂ̎�M�҂����[���̎�M����]���Ă��邱�Ƃ��m�F����K�v������܂��B�܂��A�]�����[����t�B���^�̐ݒ肪���������ǂ����A���[���̐ݒ���m�F���邱�Ƃ��ł��܂��B�ڂ����́A�ꊇ���M�K�C�h���C���Ƃ������߂̕��@�ɂ��Ẵy�[�W���������������B
  */
    
  //���[���������ɑ��M���ꂽ���ۂ��̊m�F�͑��M�Ɏg����Gmail�A�J�E���g�̑��M�{�b�N�X���m�F���Ă�������  
  //211�l�Ɂ@1.4�b�Ԋu�œ���  
  }  
}