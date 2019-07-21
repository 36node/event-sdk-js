import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * event's methods
   */
  event = {
    /**
     * List all events
     *
     * @param {ListEventsRequest} req listEvents request
     * @returns {Promise<ListEventsResponse>} A paged array of events
     */
    listEvents: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/events`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an event
     *
     * @param {CreateEventRequest} req createEvent request
     * @returns {Promise<CreateEventResponse>} The Event created
     */
    createEvent: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createEvent");

      return fetch(`${this.base}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get event by id
     *
     * @param {GetEventRequest} req getEvent request
     * @returns {Promise<GetEventResponse>} The event with given id
     */
    getEvent: (req = {}) => {
      const { eventId, headers } = req;

      if (!eventId) throw new Error("eventId is required for getEvent");

      return fetch(`${this.base}/events/${eventId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update event
     *
     * @param {UpdateEventRequest} req updateEvent request
     * @returns {Promise<UpdateEventResponse>} The event
     */
    updateEvent: (req = {}) => {
      const { eventId, headers, body } = req;

      if (!eventId) throw new Error("eventId is required for updateEvent");
      if (!body) throw new Error("requetBody is required for updateEvent");

      return fetch(`${this.base}/events/${eventId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * 删除指定活动
     *
     * @param {DeleteEventRequest} req deleteEvent request
     * @returns {Promise<DeleteEventResponse>} event deleted
     */
    deleteEvent: (req = {}) => {
      const { eventId, headers } = req;

      if (!eventId) throw new Error("eventId is required for deleteEvent");

      return fetch(`${this.base}/events/${eventId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * module's methods
   */
  module = {
    /**
     * Update module
     *
     * @param {UpdateModuleRequest} req updateModule request
     * @returns {Promise<UpdateModuleResponse>} The module
     */
    updateModule: (req = {}) => {
      const { eventId, headers, body } = req;

      if (!eventId) throw new Error("eventId is required for updateModule");
      if (!body) throw new Error("requetBody is required for updateModule");

      return fetch(`${this.base}/events/${eventId}/module`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * register's methods
   */
  register = {
    /**
     * List all registers
     *
     * @param {ListRegistersRequest} req listRegisters request
     * @returns {Promise<ListRegistersResponse>} A paged array of registers
     */
    listRegisters: (req = {}) => {
      const { eventId, query, headers } = req;

      if (!eventId) throw new Error("eventId is required for listRegisters");

      return fetch(`${this.base}/events/${eventId}/registers`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an register
     *
     * @param {CreateRegisterRequest} req createRegister request
     * @returns {Promise<CreateRegisterResponse>} The Register created
     */
    createRegister: (req = {}) => {
      const { eventId, headers, body } = req;

      if (!eventId) throw new Error("eventId is required for createRegister");
      if (!body) throw new Error("requetBody is required for createRegister");

      return fetch(`${this.base}/events/${eventId}/registers`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get register by id
     *
     * @param {GetRegisterRequest} req getRegister request
     * @returns {Promise<GetRegisterResponse>} The register with given id
     */
    getRegister: (req = {}) => {
      const { eventId, registerId, query, headers } = req;

      if (!eventId) throw new Error("eventId is required for getRegister");
      if (!registerId)
        throw new Error("registerId is required for getRegister");

      return fetch(`${this.base}/events/${eventId}/registers/${registerId}`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update register
     *
     * @param {UpdateRegisterRequest} req updateRegister request
     * @returns {Promise<UpdateRegisterResponse>} The register
     */
    updateRegister: (req = {}) => {
      const { eventId, registerId, headers, body } = req;

      if (!eventId) throw new Error("eventId is required for updateRegister");
      if (!registerId)
        throw new Error("registerId is required for updateRegister");
      if (!body) throw new Error("requetBody is required for updateRegister");

      return fetch(`${this.base}/events/${eventId}/registers/${registerId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * 删除指定表单
     *
     * @param {DeleteRegisterRequest} req deleteRegister request
     * @returns {Promise<DeleteRegisterResponse>} register deleted
     */
    deleteRegister: (req = {}) => {
      const { eventId, registerId, headers } = req;

      if (!eventId) throw new Error("eventId is required for deleteRegister");
      if (!registerId)
        throw new Error("registerId is required for deleteRegister");

      return fetch(`${this.base}/events/${eventId}/registers/${registerId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * attendee's methods
   */
  attendee = {
    /**
     * List all attendees
     *
     * @param {ListAttendeesRequest} req listAttendees request
     * @returns {Promise<ListAttendeesResponse>} A paged array of attendees
     */
    listAttendees: (req = {}) => {
      const { eventId, query, headers } = req;

      if (!eventId) throw new Error("eventId is required for listAttendees");

      return fetch(`${this.base}/events/${eventId}/attendees`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an attendee
     *
     * @param {CreateAttendeeRequest} req createAttendee request
     * @returns {Promise<CreateAttendeeResponse>} The Attendee created
     */
    createAttendee: (req = {}) => {
      const { eventId, headers, body } = req;

      if (!eventId) throw new Error("eventId is required for createAttendee");
      if (!body) throw new Error("requetBody is required for createAttendee");

      return fetch(`${this.base}/events/${eventId}/attendees`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get attendee by id
     *
     * @param {GetAttendeeRequest} req getAttendee request
     * @returns {Promise<GetAttendeeResponse>} The attendee with given id
     */
    getAttendee: (req = {}) => {
      const { eventId, attendeeId, headers } = req;

      if (!eventId) throw new Error("eventId is required for getAttendee");
      if (!attendeeId)
        throw new Error("attendeeId is required for getAttendee");

      return fetch(`${this.base}/events/${eventId}/attendees/${attendeeId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update attendee
     *
     * @param {UpdateAttendeeRequest} req updateAttendee request
     * @returns {Promise<UpdateAttendeeResponse>} The Attendee
     */
    updateAttendee: (req = {}) => {
      const { eventId, attendeeId, headers, body } = req;

      if (!eventId) throw new Error("eventId is required for updateAttendee");
      if (!attendeeId)
        throw new Error("attendeeId is required for updateAttendee");
      if (!body) throw new Error("requetBody is required for updateAttendee");

      return fetch(`${this.base}/events/${eventId}/attendees/${attendeeId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * 删除指定报名
     *
     * @param {DeleteAttendeeRequest} req deleteAttendee request
     * @returns {Promise<DeleteAttendeeResponse>} attendee deleted
     */
    deleteAttendee: (req = {}) => {
      const { eventId, attendeeId, headers } = req;

      if (!eventId) throw new Error("eventId is required for deleteAttendee");
      if (!attendeeId)
        throw new Error("attendeeId is required for deleteAttendee");

      return fetch(`${this.base}/events/${eventId}/attendees/${attendeeId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
