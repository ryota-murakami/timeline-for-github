import mock from '../Mock'

import { randomInArray } from './funcs'

// ----------------------------------------------------------------------

export const _carouselsExample = [...Array(5)].map((_, index) => ({
  description: mock.text.description(index),
  id: mock.id(index),
  image: mock.image.feed(index),
  title: mock.text.title(index),
}))

export const _carouselsMembers = [...Array(5)].map((_, index) => ({
  avatar: `https://minimal-assets-api.vercel.app/assets/images/members/member-${
    index + 1
  }.jpg`,
  id: mock.id(index),
  name: mock.name.fullName(index),
  role: mock.role(index),
}))

// ----------------------------------------------------------------------

export const _invoice = {
  discount: 10,
  id: `${Date.now()}`,
  invoiceFrom: {
    address: mock.address.fullAddress(1),
    company: mock.company(1),
    email: mock.email(1),
    name: mock.name.fullName(1),
    phone: mock.phoneNumber(1),
  },
  invoiceTo: {
    address: mock.address.fullAddress(2),
    company: mock.company(2),
    email: mock.email(2),
    name: mock.name.fullName(2),
    phone: mock.phoneNumber(2),
  },
  items: [...Array(3)].map((_, index) => ({
    description: mock.text.description(index),
    id: mock.id(index),
    price: mock.number.price(index),
    qty: 5,
    title: mock.text.title(index),
  })),
  status: 'paid',
  taxes: 5,
}

// ----------------------------------------------------------------------

export const _faqs = [...Array(8)].map((_, index) => ({
  detail: mock.text.description(index),
  heading: `Questions ${index + 1}`,
  id: mock.id(index),
  value: `panel${index + 1}`,
}))

// ----------------------------------------------------------------------

export const _addressBooks = [...Array(5)].map((_, index) => ({
  addressType: index === 0 ? 'LandingPage' : 'Office',
  fullAddress: mock.address.fullAddress(index),
  id: mock.id(index),
  isDefault: index === 0,
  phone: mock.phoneNumber(index),
  receiver: mock.name.fullName(index),
}))

// ----------------------------------------------------------------------

export const _skills = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: mock.number.percent(index),
}))

// ----------------------------------------------------------------------

export const _accordions = [...Array(4)].map((_, index) => ({
  detail: mock.text.description(index),
  heading: `Accordion ${index + 1}`,
  id: mock.id(index),
  subHeading: mock.text.title(index),
  value: `panel${index + 1}`,
}))

// ----------------------------------------------------------------------

export const _dataGrid = [...Array(36)].map((_, index) => ({
  age: mock.number.age(index),
  email: mock.email(index),
  firstName: mock.name.firstName(index),
  id: mock.id(index),
  isAdmin: mock.boolean(index),
  lastLogin: mock.time(index),
  lastName: mock.name.lastName(index),
  name: mock.name.fullName(index),
  performance: mock.number.percent(index),
  rating: mock.number.rating(index),
  status: randomInArray(['online', 'away', 'busy']),
}))

// ----------------------------------------------------------------------

export const _megaMenuProducts = [...Array(10)].map((_, index) => ({
  image: mock.image.feed(index),
  name: mock.text.title(index),
  path: '#',
}))

// ----------------------------------------------------------------------

export const _contacts = [...Array(20)].map((_, index) => ({
  address: mock.address.fullAddress(index),
  avatar: mock.image.avatar(index),
  email: mock.email(index),
  id: mock.id(index),
  lastActivity: mock.time(index),
  name: mock.name.fullName(index),
  phone: mock.phoneNumber(index),
  position: mock.role(index),
  status: randomInArray(['online', 'offline', 'away', 'busy']),
  username: mock.name.fullName(index),
}))

// ----------------------------------------------------------------------

export const _notifications = [...Array(5)].map((_, index) => ({
  avatar: [null, mock.image.avatar(2), null, null, null][index],
  createdAt: mock.time(index),
  description: [
    'waiting for shipping',
    'answered to your comment on the Minimal',
    '5 unread messages',
    'sent from Guido Padberg',
    'Your order is being shipped',
  ][index],
  id: mock.id(index),
  isUnRead: [true, true, false, false, false][index],
  title: [
    'Your order is placed',
    'Sylvan King',
    'You have new message',
    'You have new mail',
    'Delivery processing',
  ][index],
  type: [
    'order_placed',
    'friend_interactive',
    'chat_message',
    'mail',
    'order_shipped',
  ][index],
}))

// ----------------------------------------------------------------------

export const _mapContact = [
  {
    address: mock.address.fullAddress(1),
    latlng: [33, 65],
    phoneNumber: mock.phoneNumber(1),
  },
  {
    address: mock.address.fullAddress(2),
    latlng: [-12.5, 18.5],
    phoneNumber: mock.phoneNumber(2),
  },
]
