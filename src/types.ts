export type NotificationType =
  'sign-up' |
  'verification-success' |
  'verification-failure' |
  'recommended-meeting' |
  'match-request' |
  'match-request-remind' |
  'matched' |
  'match-reject';

export type ModalType = 'request-match' | 'reject-match' | 'matched' | 'block-partner' | 'delete-partner' |
  'logout' | 'delete-account' | 'purchase-point' | null;
