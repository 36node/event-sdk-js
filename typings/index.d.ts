export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  event: SDK.EventAPI;
  module: SDK.ModuleAPI;
  register: SDK.RegisterAPI;
  attendee: SDK.AttendeeAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface EventAPI {
    /**
     * List all events
     */
    listEvents(req: ListEventsRequest): Promise<ListEventsResponse>;
    /**
     * Create an event
     */
    createEvent(req: CreateEventRequest): Promise<CreateEventResponse>;
    /**
     * Get event by id
     */
    getEvent(req: GetEventRequest): Promise<GetEventResponse>;
    /**
     * Update event
     */
    updateEvent(req: UpdateEventRequest): Promise<UpdateEventResponse>;
    /**
     * 删除指定活动
     */
    deleteEvent(req: DeleteEventRequest): Promise<DeleteEventResponse>;
  }
  export interface ModuleAPI {
    /**
     * Update module
     */
    updateModule(req: UpdateModuleRequest): Promise<UpdateModuleResponse>;
  }
  export interface RegisterAPI {
    /**
     * List all registers
     */
    listRegisters(req: ListRegistersRequest): Promise<ListRegistersResponse>;
    /**
     * Create an register
     */
    createRegister(req: CreateRegisterRequest): Promise<CreateRegisterResponse>;
    /**
     * Get register by id
     */
    getRegister(req: GetRegisterRequest): Promise<GetRegisterResponse>;
    /**
     * Update register
     */
    updateRegister(req: UpdateRegisterRequest): Promise<UpdateRegisterResponse>;
    /**
     * 删除指定表单
     */
    deleteRegister(req: DeleteRegisterRequest): Promise<DeleteRegisterResponse>;
  }
  export interface AttendeeAPI {
    /**
     * List all attendees
     */
    listAttendees(req: ListAttendeesRequest): Promise<ListAttendeesResponse>;
    /**
     * Create an attendee
     */
    createAttendee(req: CreateAttendeeRequest): Promise<CreateAttendeeResponse>;
    /**
     * Get attendee by id
     */
    getAttendee(req: GetAttendeeRequest): Promise<GetAttendeeResponse>;
    /**
     * Update attendee
     */
    updateAttendee(req: UpdateAttendeeRequest): Promise<UpdateAttendeeResponse>;
    /**
     * 删除指定报名
     */
    deleteAttendee(req: DeleteAttendeeRequest): Promise<DeleteAttendeeResponse>;
  }

  type ListEventsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        startedAt: {
          $gt?: string;
          $lt?: string;
        };
        endAt: {
          $gt?: string;
          $lt?: string;
        };
        name: {
          $regex?: string;
        };
        ns?: string;
      };
    };
  };

  type ListEventsResponse = {
    body: [Event];
    headers: {
      xTotalCount: string;
    };
  };

  type CreateEventRequest = {
    body: Event;
  };

  type CreateEventResponse = {
    body: Event;
  };

  type GetEventRequest = {
    eventId: string;
  };

  type GetEventResponse = {
    body: Event;
  };

  type UpdateEventRequest = {
    eventId: string;
    body: Event;
  };

  type UpdateEventResponse = {
    body: Event;
  };

  type DeleteEventRequest = {
    eventId: string;
  };

  type UpdateModuleRequest = {
    eventId: string;
    body: Module;
  };

  type UpdateModuleResponse = {
    body: Module;
  };

  type ListRegistersRequest = {
    eventId: string;

    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;
    };
  };

  type ListRegistersResponse = {
    body: [Register];
    headers: {
      xTotalCount: string;
    };
  };

  type CreateRegisterRequest = {
    eventId: string;
    body: Register;
  };

  type CreateRegisterResponse = {
    body: Register;
  };

  type GetRegisterRequest = {
    eventId: string;
    registerId: string;

    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;
    };
  };

  type GetRegisterResponse = {
    body: Register;
  };

  type UpdateRegisterRequest = {
    eventId: string;
    registerId: string;
    body: Register;
  };

  type UpdateRegisterResponse = {
    body: Register;
  };

  type DeleteRegisterRequest = {
    eventId: string;
    registerId: string;
  };

  type ListAttendeesRequest = {
    eventId: string;

    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        registerId?: string;
        name?: string;
        phone?: string;
      };
    };
  };

  type ListAttendeesResponse = {
    body: [Attendee];
    headers: {
      xTotalCount: string;
    };
  };

  type CreateAttendeeRequest = {
    eventId: string;
    body: Attendee;
  };

  type CreateAttendeeResponse = {
    body: Attendee;
  };

  type GetAttendeeRequest = {
    eventId: string;
    attendeeId: string;
  };

  type GetAttendeeResponse = {
    body: Attendee;
  };

  type UpdateAttendeeRequest = {
    eventId: string;
    attendeeId: string;
    body: Attendee;
  };

  type UpdateAttendeeResponse = {
    body: Attendee;
  };

  type DeleteAttendeeRequest = {
    eventId: string;
    attendeeId: string;
  };

  type Event = {
    id: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    name: string;
    startedAt: string;
    endAt: string;
    address: string;
    desc: string;
    bannerPc: string;
    bannerMobile: string;
    signinStartAt: string;
    signinEndAt: string;
    published: boolean;
    publishedAt: string;
    publishedBy: string;
    ns: string;
    siginin: [
      {
        id: string;
        name: string;
        createdAt: string;
      }
    ];
    i18n: [
      {
        lan: string;
        content: {};
      }
    ];
    modules: [
      {
        id: string;
        name: string;
        type: string;
        body:
          | [
              {
                date: string;
                start: string;
                end: string;
                subject: string;
                speakers: string;
                files: [
                  {
                    id: string;
                    name: string;
                    url: string;
                  }
                ];
              }
            ]
          | [
              {
                avatar: string;
                name: string;
                position: string;
                intro: string;
              }
            ]
          | [
              {
                id: string;
                name: string;
                url: string;
              }
            ]
          | {
              content: {};
            };
        i18n: [
          {
            lan: string;
            content: {};
          }
        ];
      }
    ];
  };
  type Module = {
    id: string;
    name: string;
    type: string;
    body:
      | [
          {
            date: string;
            start: string;
            end: string;
            subject: string;
            speakers: string;
            files: [
              {
                id: string;
                name: string;
                url: string;
              }
            ];
          }
        ]
      | [
          {
            avatar: string;
            name: string;
            position: string;
            intro: string;
          }
        ]
      | [
          {
            id: string;
            name: string;
            url: string;
          }
        ]
      | {
          content: {};
        };
    i18n: [
      {
        lan: string;
        content: {};
      }
    ];
  };
  type Agenda = {
    date: string;
    start: string;
    end: string;
    subject: string;
    speakers: string;
    files: [
      {
        id: string;
        name: string;
        url: string;
      }
    ];
  };
  type Guest = {
    avatar: string;
    name: string;
    position: string;
    intro: string;
  };
  type Custom = {
    content: {};
  };
  type Language = {
    lan: string;
    content: {};
  };
  type File = {
    id: string;
    name: string;
    url: string;
  };
  type Register = {
    id: string;
    createdAt: string;
    updatedAt: string;
    eventId: string;
    name: string;
    code: string;
    fields: [
      {
        basic: boolean;
        required: boolean;
        key: string;
        type: string;
        title: string;
        placeholder: string;
        options: [
          {
            label: string;
            value: string;
          }
        ];
      }
    ];
    i18n: [
      {
        lan: string;
        content: {};
      }
    ];
  };
  type Field = {
    basic: boolean;
    required: boolean;
    key: string;
    type: string;
    title: string;
    placeholder: string;
    options: [
      {
        label: string;
        value: string;
      }
    ];
  };
  type Attendee = {
    id: string;
    createdAt: string;
    updatedAt: string;
    eventId: string;
    registerId: string;
    code: string;
    name: string;
    gender: string;
    industry: string;
    company: string;
    position: string;
    department: string;
    phone: string;
    email: string;
    extra: [
      {
        key: string;
        value: string;
      }
    ];
    signin: [
      {
        id: string;
        name: string;
        time: string;
        signed: boolean;
      }
    ];
  };
  type Err = {
    code: string;
    message: string;
  };
}
